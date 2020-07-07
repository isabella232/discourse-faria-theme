import { createWidget } from "discourse/widgets/widget";
import { h } from "virtual-dom";
import { iconNode } from "discourse-common/lib/icon-library";
import { wantsNewWindow } from "discourse/lib/intercept-click";
import DiscourseURL from "discourse/lib/url";
import getURL from "discourse-common/lib/get-url";

export default createWidget("home-logo", {
  tagName: "div.title",

  settings: {
    href: getURL("/")
  },

  href() {
    const href = this.settings.href;
    return typeof href === "function" ? href() : href;
  },

  logoUrl() {
    return this.siteSettings.site_logo_url || "";
  },

  mobileLogoUrl() {
    return this.siteSettings.site_mobile_logo_url || "";
  },

  smallLogoUrl() {
    return this.siteSettings.site_logo_small_url || "";
  },

  logo() {
    const { siteSettings } = this;
    const mobileView = this.site.mobileView;

    const mobileLogoUrl = this.mobileLogoUrl();
    const showMobileLogo = mobileView && mobileLogoUrl.length > 0;

    const logoUrl = this.logoUrl();
    const title = siteSettings.title;

    if (this.attrs.minimized) {
      const logoSmallUrl = this.smallLogoUrl();
      if (logoSmallUrl.length) {
        return h("img#site-logo.logo-small", {
          key: "logo-small",
          attributes: {
            src: getURL(logoSmallUrl),
            width: 36,
            alt: title
          }
        });
      } else {
        return h("a.text-logo-wrapper", [
          h("a", { href: "/" }, iconNode("home")),
          h("h1#site-text-logo.text-logo", { key: "logo-text" }, title)
        ]);
      }
    } else if (showMobileLogo) {
      return h("img#site-logo.logo-big", {
        key: "logo-mobile",
        attributes: { src: getURL(mobileLogoUrl), alt: title }
      });
    } else if (logoUrl.length) {
      return h("img#site-logo.logo-big", {
        key: "logo-big",
        attributes: { src: getURL(logoUrl), alt: title }
      });
    } else {
      return h("a.text-logo-wrapper", [
        h("a", { href: "/" }, iconNode("home")),
        h("h1#site-text-logo.text-logo", { key: "logo-text" }, title)
      ]);
    }
  },

  html() {
    return h(
      "a",
      { attributes: { href: this.href(), "data-auto-route": true } },
      this.logo()
    );
  },

  click(e) {
    if (wantsNewWindow(e)) {
      return false;
    }
    e.preventDefault();

    DiscourseURL.routeToTag($(e.target).closest("a")[0]);
    return false;
  }
});
