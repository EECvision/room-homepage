(this["webpackJsonproom-homepage"]=this["webpackJsonproom-homepage"]||[]).push([[0],{10:function(e,A,t){},11:function(e,A,t){"use strict";t.r(A);var s=t(0),c=t(1),i=t.n(c),n=t(4),a=t.n(n),r=(t(10),t(2)),l=t.p+"static/media/icon-close.3e88bd6e.svg",o=t.p+"static/media/icon-hamburger.dc022bac.svg",u=function(){var e=Object(c.useState)(!0),A=Object(r.a)(e,2),t=A[0],i=A[1],n=Object(c.useState)(window.innerWidth),a=Object(r.a)(n,2),u=a[0],m=a[1],j=function(){m(window.innerWidth)};Object(c.useEffect)((function(){return window.addEventListener("resize",j),function(){return window.removeEventListener("resize",j)}}));var x=Object(s.jsxs)("div",{className:"w-full relative flex lg:justify-start justify-center items-center z-10 border",children:[Object(s.jsx)("div",{className:"inset-x-0 ml-6 lg:hidden",children:Object(s.jsx)("img",{onClick:function(){return i(!t)},className:"cursor-pointer",src:l,alt:"close "})}),Object(s.jsxs)("div",{className:"w-full h-32 flex justify-evenly items-center text-black font-bold bg-white",children:[Object(s.jsx)("span",{className:"cursor-pointer",children:"Home"}),Object(s.jsx)("span",{className:"cursor-pointer",children:"Shop"}),Object(s.jsx)("span",{className:"cursor-pointer",children:"About"}),Object(s.jsx)("span",{className:"cursor-pointer",children:"Contact"})]})]}),d=Object(s.jsxs)("div",{className:"w-full relative flex lg:justify-start justify-center items-center z-10",children:[Object(s.jsx)("div",{className:"absolute inset-x-0 mt-24 ml-12 lg:hidden",children:Object(s.jsx)("img",{onClick:function(){return i(!t)},className:" cursor-pointer",src:o,alt:"hamburger"})}),Object(s.jsxs)("div",{className:"absolute w-1/2 flex justify-center items-center text-white mt-24 lg:ml-16",children:[Object(s.jsx)("div",{className:"w-1/5 font-bold text-3xl cursor-pointer",children:"room"}),Object(s.jsxs)("div",{className:"w-4/5 hidden lg:flex justify-evenly items-center",children:[Object(s.jsx)("span",{className:"cursor-pointer",children:"Home"}),Object(s.jsx)("span",{className:"cursor-pointer",children:"Shop"}),Object(s.jsx)("span",{className:"cursor-pointer",children:"About"}),Object(s.jsx)("span",{className:"cursor-pointer",children:"Contact"})]})]})]});return Object(s.jsx)("div",{children:t||u>=1024?d:x})},m=t.p+"static/media/desktop-image-hero-1.91901d0d.jpg",j=t.p+"static/media/desktop-image-hero-2.9d354056.jpg",x=t.p+"static/media/desktop-image-hero-3.05fd679a.jpg",d=t.p+"static/media/icon-angle-right.0ed3f81f.svg",b=t.p+"static/media/icon-angle-left.d53877df.svg",f=function(e){var A=e.dispatch;return Object(s.jsxs)("div",{className:"w-full h-16 bg-black flex justify-around items-center",children:[Object(s.jsx)("img",{onClick:function(){return A("PREV")},className:"opacity-50 transition duration-200 transform hover:scale-125 cursor-pointer",src:b,alt:"left"}),Object(s.jsx)("img",{onClick:function(){return A("NEXT")},className:"opacity-50 transition duration-200 transform hover:scale-125 cursor-pointer",src:d,alt:"right"})]})},p=function(){var e=[m,j,x],A=Object(c.useReducer)((function(A,t){switch(t){case"NEXT":return A>=e.length-1?0:A+1;case"PREV":return A<=0?e.length-1:A-1;default:return A}}),0),t=Object(r.a)(A,2),i=t[0],n=t[1];return Object(s.jsxs)("div",{className:"relative w-full flex justify-end items-end",children:[Object(s.jsx)("img",{className:"w-full",src:e[i],alt:""}),Object(s.jsx)("div",{className:"absolute w-1/4 transform lg:translate-x-full translate-x-0",children:Object(s.jsx)(f,{dispatch:function(e){n(e)}})})]})},h=function(){return Object(s.jsxs)("div",{className:"w-full lg:w-3/5",children:[Object(s.jsx)(u,{}),Object(s.jsx)(p,{})]})},g=t.p+"static/media/icon-arrow.84087786.svg",w=function(){return Object(s.jsxs)("div",{className:"w-full lg:w-2/5 px-4 xl:px-20 my-24 lg:my-0",children:[Object(s.jsxs)("h1",{className:"font-bold text-2xl xl:text-4xl mb-4",children:["Discover innovative ",Object(s.jsx)("br",{})," ways to decorate"]}),Object(s.jsx)("p",{className:"text-sm text-gray-700 opacity-50 mb-4",children:"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."}),Object(s.jsxs)("div",{className:"flex items-center justify-start opacity-50",children:[Object(s.jsx)("div",{className:"text-lg xl:text-xl font-medium mr-8 tracking-widest uppercase",children:"Shop now"}),Object(s.jsx)("img",{src:g,alt:""})]})]})},B=t.p+"static/media/image-about-dark.329bbc44.jpg",v=function(){return Object(s.jsxs)("div",{className:"flex flex-col lg:flex-row items-center lg:items-start justify-evenly",children:[Object(s.jsx)("img",{className:"w-full lg:w-1/4 h-64",src:B,alt:"dark"}),Object(s.jsxs)("div",{className:"w-full lg:w-2/4 px-12 lg:px-20 my-24 lg:my-12",children:[Object(s.jsx)("h1",{className:"font-bold text-2xl mb-2",children:"About our furniture"}),Object(s.jsx)("p",{className:"text-sm text-gray-700 opacity-50 mb-2",children:"Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space."})]}),Object(s.jsx)("img",{className:"w-full lg:w-1/4 h-64",src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIAQoBuAMBIgACEQEDEQH/xAAcAAEBAQEBAQEBAQAAAAAAAAAAAQIFAwQGBwj/2gAIAQEAAAAA/wBNa000b01bWi0GgABIBIzzrq1o3q6WtNAqgACQBJnnXVrRvV00ttA0AAEgCSc3VttPS6rTS2rv0x5gAAzYEic6221rV1bbWmv0P6D6PD4edyfn84CwDIEic6221u3Vaaav6f8ATHzfBxeRi6wACQCRObq22tauq001f6P7Hy8j8ziZ0gASASJzrbbV1q6aaXX9B+w+L8d8uWc+3mAiADKc5q1o3dW6W3X6f9M8uJ+axlnWQQIAMs89ppo3dNaNNb/a9Px4XB88tYiKysABlnnW221u26tW2+/Z6vlwflxj38DKoABIZ5urbWjd1dK0z93yrUe3iQsABIM823VrRrWmmlvh1/gpY9deAAAJCTm226NG9Lppc/b8toY6nOAADNhJzVumlrWrbdIzum7M/f4Fx6/MASAy5erdNLV2uq1j5cLnz6ntq0mPLq84lBkGXMrWltq7W6Xz9bY+Tr/OnQ+BHl0/gllVnUgycu3VtrRu22vP6sWX5ez8FdXlw8+l8AKghE5ta1atPQtax0vi0fL2+dXV5cTPQ+EAAyc1bq1aaattnX5lPm7XPrp8wj6vlgADJxtGlqquru36Ps5yvHtcx6dPlQfd8EIgEg41urS0q6tvZ+L5VuO5xn1dHiodXm+cEQkTKfNbqtFo1pb+h4MLjucd9f38Yj7/AA+eQSJEmT5bq6WlpdtP0n5wrz7nJfX9vHD6PX4shkkmYT5rbdKo0NX9P+bEz2uRr7fs41V6fbzkGURBrntWtLVpbdfpvzULnscx9318i2tdH4N+np6evp6+utWwfzy2221a3Vvp+j/O3VeXZ+b29un5enp6b5PY9aznGc4z55xny88/kbdVW9bb3r19/X2/ReGrvfD6n0JJnOXM+7aSZZZTx8fLxxxtb9vb29vb136enr7brJiJOP1bdJ5yPk+7188efl4+fl5efn5eeM4n7H29NJJM5zJKq4lueT2defljDOfPzxjOZJmZmcxlP1catWZymM5ziGcYZ0hmJCRJnLMSRmfqZjOc4xEziJIsJQqCEZSRJIkk6kznOZERSroCkIIkIhllJl9/l5FGhaFTVsoZZASDLKSZx//EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAgBAhAAAADQAEgDQAAGQDQAAk0kA0AAMtIgWgACUSKUAABLFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAIAQMQAAAAyAAAAAAAAAACoAAAA0yAAAAsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/xAAjEAABAQkBAQEBAQAAAAAAAAABEQACAwQFEBITIBQwQBUG/9oACAEBAAECAB8QwsB+4/BLi4sOAw6HxH4j8TcMLCw4DD4D9J+ZYMLCw6HYsiM7C8j0BP0G5YMLCwuAwYWHIsBI0GDTkfaK0Voxxed/KbmwsLC4uLDoNQpCzzPtFabmCWER536H4G5sLCwuLBhYdBpJyzzPtPTDxZC0N54fM/A3NhYWF1DC45DBqZEs80Z+ZjXNovxNl+Z4HQuOBYMG/wA/OMr5qkU3DPNDHSqGP6BcWHTj9NrDPmqAi4hE2UflFhYWFwWFxcWFqUJSuuVGYEWCWJJkjyo/KLDofJ96SdsuTG1NYsq3H1PY+Lth8IxmWXqRfmYf4jwbj5D4wHJ19h06ao7+I8HgdC4YXHBMhMbw/lmHwyJpmH9WrTpIdhfJfiOBYXHA4iF1x+CGzL5egQED4jbtuRGMcfFfiOhYXFxwGjGEwsiTTkJzLIvT0JVVozQGVh8D9BYdCwsLxmIFhabZ2wtVOA0VpLsMezwnzHbzTcHiaYXAqlkRn2pf4xZLDtV5Aq/M0xuGqnCkUhj9zfdu3bhG379+/fv3btojCPv3bpRqtG3b9+6PEiv7t0J+rP7t+7duop3b9/o3+j0en0+n0en0mZ9Pp9Pp5DIlkSwCMjUWHOv8PtN3lRWmREtRi+E4ROkY2H2FxagOvPcPtOG0o1aZeKY9ND6k8j4Lcc0hiyraIZw2kmrXUoakPibFjwbDpVut1BBlSSt3mn7yLVq6WhGqiyIiIiIiYphq0fNLoAgdfKIiI+J5kSQassiImIFTcEASgp4pQowoQoIoIof8cUsSPm1MudwGHKWRGRHRPDHDXq1R4cxBdpwpMOlTFLFFFHFKEgJWsQ4B2bjG2mKYpimMZgxzHMXaX3iyIyIlkDohadIgaRAdlXZAUsUh6S/l+DyCEtefkn9meZfyz2bd1UfgP5KmBcQhiyqXnnzEMczRnNGl2C7KuyQpztLFKFKFLFMEiJV1zLPPPbuMx6PRvMasPwSrY4ljF9Hp9E47KPPRTMGaM6Z8z5qJqBnzOmbMwYxiZKSJYQgFVi+Y3q9fr9fp3Z4hwQ8MzMer0+gzVTmIL5JiGM9G9PtNQM+Z0zRjmLszzyyyVS9kSqkqvp3Z46xA8+jDMzPp9BmjOeox9mzb6TMGLns2bduwP5ZKpKqqqqllyJZVZePWZwz/ALzOGZMYv5bd5il8xN23ZnnlkqqqqqquSqqsqqSDkTZWWyqpOJO3fvMbbszzyVbgrkD0rLdVVcsibqvwJJYs8xYfIdBjyegx/EbFjb//xABFEAABAwEDBgoGBwcFAQAAAAABAAIDBBExURIhQVJxkQUQICIwMkJDYYETI0BQobEkJVNicoKSFGBjc3Sy0RVUosHh8P/aAAgBAQADPwD9wM37+SP6kbjsBVT/ALd+5Tt60Lx5Ii8WbfcunpCVJMBJUuMbNXT5qhpwMinaXaxzlBtwA4xYcwUQJtjHlmUbuq8g4OTmmxwI93Mc01kwtINkYPz5QZaxvWPwRcSTxFuY524FCzLabW/L3ayKgo2C/wBE0/qz8i9CBn3jci4kuNpPIyXZ+qcx2LJJGHuz03B9M8u6rQyz8PIDGucTcEZpHPN2jlWyP2+4c3RtY99HIRY85Udt2Vx2ItiyRp5Vhyzc35q20+7Cxwc02OBBBCirW+gmcG1DRnGv4jjta08lzmvks5rLLTtVubQPcQ6QPrTIeq20n8oUsbGxVLTIwXEZnf8Aqo5urOATofmKZM0gOB2J8dtozcQCwRdS1jDnNgduPu7Ja52AXoaCpm0vsjH5r+Mo4njKtlmh1mvb7Xm9jtLGYleipaSn0kGR3nmHQejrmEntheiqJo9V5Hu301W0aBzUH1MlnVbzB+XN0GRUMcrKtzhdI1j9492WAlR00gllaTfcmEm220ph7QTdYb03WG9N1gfNW3I4J2hpT3ua8tNoUtSWOkaLWsDM2AR1SvAoqy82bVC3rTNHx+SiMLpTK6y5tjcxd7msjdsT3Dmi2xS3hpUrb8oJ6KJsC9Vlh5BUw75yqR3qqdcbgqnXbuCqD3g3BTHvin9p796ZpFqbkWBZXA8B1ahw3t9uz9B6soti28YwQ1Qm2NcBYbUG8HNm0mTJRx4jlNGKjg/ZfRCzLga920oo4om/i5iLuB5fuVDDvBHubM0eKshj5PMb+IL6mh8Z/wDrj57Fnov6ZvJ5jkHcF17cHRu+Nnua1zB4r0LaUW53xZey08nms/Evqam8Z3cfPYudRf0zeTzXbEDScJMOmAOHk4e4ByBxWysCAqYox2II2/C3k8xv4l9T0fjM/j57Fno/6dnJ5pVv7YzWp5PgPY2YpmKZimJhTExNTExMTMUzFNxTNZMxTMUzFMxQlqYwMQEz/UaoZQ5rw3cAFHrKPFR4qPWTXtaGnPagzgmgyjZbLIo9ZM1k18jQ02prX0gcbD+zsUeso9ZM1lHrKPXCBqnN0Ojkb/xKj1lFrKLWUR7RUWKjxUeJ3KPx3KPE7lH/APBR4nco8TuUWJ3KLE7lF4qPxUXiosfYBxDiy62AYyNQkrKp+Mz/AJ8m7avqrg4ffk4/WBeupvCnZxDkWV8AxdZvWS9wwNnTBD2b6Sx57NrtwWU5zsSTv5PV2r6s4NHjJ8+P1wC+kQfyGfLlZFdA777Vk1M7cJHj49F4+1mOGsl1KeQ7xxHkdTavq/g38/z4/XBfSo/5Efy5WTURnBwWTXVY/iu+J6U+0GPgrhJ/8EM/UbOVnbtVlFwaPuP/ALuP14X0tn8mP5cRR4y14svX06Y45Lt7R01uhE3NKdqlPNzD7AeR6PgOpxfLE0bAbePDj6pGsvonBot7p/8Adx+vC+mD+Uz+3lZLgSnPqWPaCQ6GM/8AFSm6N25VBuhduVWe4eqw9yVWHsAKp0uaFJ2pmhM7U6ph1piVQi9xKoB2bVQN7pUYugaqZt0Q3KEXRN3KPRE3cgLmgdMOTnag3gelbpfUE+QbxFHAo6qcbgnNDCRpUs1NwfkRl1kRuH3lWOugduVce4PwXCMT2yMhYbNZ9ifVSCaVwY7JaC0G24JmmVU4vkVGL3WqhHZtVC26IKFrKcxMs5xtTDS0hLAT6IfBNFzAjqhPT07FYuTddMxTPFN1SjoYnm5ilwsUx0qTXTz3iOl56Ap2qVJqFSaqf4b07SQvvq2607Anm6J58iqh11M9VZug3uVYbLWxtz6yhqKWminfkmLK6pxVC3tvPmqAdlx81QDuAdqo29WnZuUIugYPJAwU4DQPW6NiLKGkA1D80/FPxTx2kTe9N10zFMxTNCGqg6nbmueE80NGWjsOG4qVS4p57aOusSmi9NQwQw4/FDFNF7xvUY7YUWKjCGv8CmaXncmm4PO5ON0LzvUxupXfFVRs+jAbR/6qo9mNu5T6ZmBa1TuBUHanefIKjF5efgqId247XFUjbqdvnnUberC0eScLgAn6ydrrF4TNdM0uUehMwKGhqOopNDQnuigyrstPFLSWGwejUh7SfiUeJgvIHmoR3rP1KEd407BaotAedjSgboZT5KaeEsZTuttBzuGhFtJDFKMh7C7TbemDthRDthQjthQ6yi8SmaGrBifoAUugqY9pTHtKQ9sp+sU7FFFFUwupmbkwdWFg8gjosCfrpx7abpkUQvcoRpUIUY0EoaGJ2hilU2KnN7lJpeUdL0MSm6SoW3vaPNUo71vkqfQXHY0pnZilP5UfsHeZAR1WD8UgQfFFaWWNfbzCXFGWmpXQzMa0R2HKGe21OF9W0bGhM01jzssCg0zyu/MqXVc7aSqYXU4TW9WFoT9AaPJTHtqXXUh7RT9ZOOlHFHHp5TcFOVUFTnSVKb3p2ly8UNJUYveB5qmbfMzeqX7QHYCVH2WPOxhR0U7/ADsCeO7Y38Twn/awjZa5PPf/AKYv8pxvlmOwNamm20PP4pP8KP7Jvm4lNFzIh+W1P0Os2NATz3z99ixLjtcU3VC8BuRxTgL07H2xvZppT5AJ2iCza9oThohG2T/CfolhGwOcpT336Yj/ANqU97P5NaE43mY7XgfJA9j9Ujim6GRbifmVZcWjYwJ32jvKwK29zztcUzUQGgbkcUTpR4iiijxnkH2uLUt2klRC6Nu5AXWDyRxRx4iiinI8qz2IezZ/Zcy+XQXq7obuhzcn/8QAGxEAAgEFAAAAAAAAAAAAAAAAARFAACAwYID/2gAIAQIBAT8AynVjcpIkqhyB/8QAFhEAAwAAAAAAAAAAAAAAAAAAAWCA/9oACAEDAQE/AHoTF//Z",alt:"light"})]})},N=function(){return Object(s.jsxs)("div",{className:"flex flex-col items-center justify-start",children:[Object(s.jsx)("div",{className:"flex items-start",children:Object(s.jsxs)("div",{className:"flex flex-col lg:flex-row justify-center items-center",children:[Object(s.jsx)(h,{}),Object(s.jsx)(w,{})]})}),Object(s.jsx)(v,{})]})},Q=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(N,{})})},P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,12)).then((function(A){var t=A.getCLS,s=A.getFID,c=A.getFCP,i=A.getLCP,n=A.getTTFB;t(e),s(e),c(e),i(e),n(e)}))};a.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(Q,{})}),document.getElementById("root")),P()}},[[11,1,2]]]);
//# sourceMappingURL=main.b43d1f91.chunk.js.map