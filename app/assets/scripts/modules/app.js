import MobileMenu from './MobileMenu';
import RevealOnScroll from './RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new  MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");