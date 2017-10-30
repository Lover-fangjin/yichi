import '../css/normalize.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import 'Swiper/dist/css/swiper.css';
import  Swiper from 'Swiper/dist/js/swiper.js';

import '../css/index.css';
import './picturefill.js';
 var mySwiper = new Swiper ('.swiper-container', {
                direction: 'horizontal',
                // loop: true,
                // loopAdditionalSlides : 1,
                
                // 如果需要分页器
                pagination: {
                  el: '.swiper-pagination',
                },
                
                // 如果需要前进后退按钮
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }
                
            }) 