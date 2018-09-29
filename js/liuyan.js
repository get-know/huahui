/**
 * Created by Administrator on 2018/9/17.
 */


!function(){
    $('textarea').on('input',function(){

        $('.submit').on('click',function(){
            let name = $('.username').val();
            let txt = $('textarea').val();
            if(name !== '' && txt !== ''){
                $('.word').append(
                    `<li>
                    <div class="w-left">
                    <i class="iconfont icon-yonghu"></i>
                    </div>
                    <div class="w-right">
                    <p class="name">${name}</p>
                    <div class="w-time">2018-09-19 16:18:20</div>
                </div>
                <p class="desc">${txt}</p>    
                </li>`
                );
                $('.username').val('');
                $('textarea').val('');
            }
        });
    })
    $('.w-left').on('click',function(){
        $(this).parent('li').remove();
    });
}()

//留言功能
// !function(){
//     let oName = document.querySelector('.username'),
//         oPhone = document.querySelector('.phone'),
//         oTxt = document.querySelector('.sidebar > textarea'),
//         oSubmit = document.querySelector('.submit'),
//         oUl = document.querySelector('.word'),
//         oNum = document.querySelector('.info > span');
//
//     oTxt.oninput = function(){
//         oNum.innerHTML = oTxt.value.length;
//     }
//     oSubmit.addEventListener('click',function(){
//         let name = oName.value,
//             txt = oTxt.value;
//
//         if(name === ''){
//             oName.focus();
//             return;
//         }else if(txt === ''){
//             oTxt.focus();
//             return;
//         }
//         oUl.innerHTML +=
//             `<li>
//             <div class="w-left">
//             <i class="iconfont icon-yonghu"></i>
//             </div>
//             <div class="w-right">
//             <p class="name">${name}</p>
//             <div class="w-time">2018-09-19 16:18:20</div>
//         </div>
//         <p class="desc">${txt}</p>
//
//         </li>`;
//         oName.value = '';
//         oTxt.value = '';
//     },false)
// }()
