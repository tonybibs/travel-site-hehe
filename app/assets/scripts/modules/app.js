import MobileMenu from './MobileMenu';
import RevealOnScroll from './RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './StickyHeader';

var mobileMenu = new  MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();