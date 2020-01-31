import { createWidget } from "discourse/widgets/widget";
import hbs from "discourse/widgets/hbs-compiler";

createWidget("another-widget", {
  tagName: "div.another",

  template: hbs`
  <div class="custom-sidebar-nav-contents">

    <h3> Student Community </h3>

    <ul>
      <li><a href="{{theme-setting 'sidebar_forum_link'}}">{{d-icon 'comments'}} <span class="sidebar-nav-text">Forums</span> </a></li>
      <li><a href="{{theme-setting 'sidebar_myposts_link'}}">{{d-icon 'file'}} <span class="sidebar-nav-text">My Posts</span> </a></li>
      <li><a href="{{theme-setting 'sidebar_categories_link'}}">{{d-icon 'layer-group'}} <span class="sidebar-nav-text">Categories</span> </a></li>
      <li><a href="{{theme-setting 'sidebar_activity_link'}}">{{d-icon 'chart-line'}} <span class="sidebar-nav-text">Activity</span> </a></li>
      <li><a href="{{theme-setting 'sidebar_faq_link'}}">{{d-icon 'question-circle'}} <span class="sidebar-nav-text">FAQ & Policies</span> </a></li>
    </ul>

    <h3> Subject Center </h3>

    <ul>
      <li><a href="{{theme-setting 'sidebar_dpassessment_link'}}">{{d-icon 'clipboard'}} <span class="sidebar-nav-text">DP Assessment</span> </a></li>
      <li><a href="{{theme-setting 'sidebar_deadlines_link'}}">{{d-icon 'clock'}} <span class="sidebar-nav-text">Deadlines</span> </a></li>
      <li><a href="{{theme-setting 'sidebar_examcalendar_link'}}">{{d-icon 'calendar'}} <span class="sidebar-nav-text">Exam Calendar</span> </a></li>
      <li><a href="{{theme-setting 'sidebar_resources_link'}}">{{d-icon 'hdd'}} <span class="sidebar-nav-text">Resources</span> </a></li>
      <li><a href="{{theme-setting 'sidebar_curriculum_link'}}">{{d-icon 'map'}} <span class="sidebar-nav-text">Curriculum </span></a></li>
    </ul>

    <h3> Openapply </h3>

    <ul>
      <li><a href="{{theme-setting 'sidebar_international_link'}}">{{d-icon 'book'}} <span class="sidebar-nav-text">International Admissions Bulletin</span> </a></li>
    </ul>

    <h3> Managebac </h3>

    <ul>
      <li><a href="{{theme-setting 'sidebar_roadmap_link'}}">{{d-icon 'road'}} <span class="sidebar-nav-text">Product Roadmap & Changelog</span> </a></li>
      <li><a href="{{theme-setting 'sidebar_blog_link'}}">{{d-icon 'rss-square'}} <span class="sidebar-nav-text">Blog</span> </a></li>
      <li><a href="{{theme-setting 'sidebar_profile_link'}}">{{d-icon 'user'}} <span class="sidebar-nav-text">Profile</span> </a></li>
    </ul>


  </div>

  `
});
