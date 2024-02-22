

let allLikeButton = document.querySelectorAll('.like-btn');

async function LikeButton(productId){
    // console.log('liked the product');
    try{
        let response = await axios({
        method: 'post',
        url: `/products/${productId}/like`,
        headers : {'X-Requested-With' : 'XMLHttpRequest'}
    })
    console.log(response);
    }
    catch(e){
        window.location.replace('/login');
        console.log(e.message, 'error hai ye window vaali line ka');
    }
}

for(let btn of allLikeButton){
   btn.addEventListener('click', ()=>{
    let productId = btn.getAttribute('product-id');
    LikeButton(productId);
    })
}









