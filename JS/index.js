const srchange = document.getElementById('srchange')
const button1 = document.querySelector('.nav1')
const button2 = document.getElementById('nav2')
const button3 = document.getElementById('nav3')
const text = document.getElementById('text2')
const main = document.getElementById('mainText')
const togHead = document.getElementById('toggleHead')
const nav = document.querySelector('.nav')
const close = document.getElementById('close')
const waitList = document.getElementById('join')
const confrm = document.getElementById('confirm');
const subscribe = document.getElementById('subscribe')
const inpt = document.getElementById('email');
const successful = document.getElementById('success-pop')
const loading = document.getElementById('loading')
const ok = document.getElementById('ok')
const BandW = document.getElementById('B-or-W');
const bgchange = document.body;


waitList.addEventListener('click', () => {
    confrm.style.display = 'block';
    
})

BandW.addEventListener('click', () => {
    if (bgchange.classList.contains('dark-mode')){
        bgchange.classList.remove('dark-mode')
        BandW.src = "./IMG/blac moon.png"
        localStorage.setItem('theme')
        localStorage.setItem('dark-mode', 'disabled')
    }
    else {
        bgchange.classList.add('dark-mode')
        BandW.src = "./IMG/gold moon.png"
        localStorage.setItem('dark-mode', 'enabled')
    }
})

if (localStorage.getItem('dark-mode') === 'disabled') {
    bgchange.classList.remove('dark-mode')
    BandW.src = "./IMG/gold moon.png"
   
} else if (localStorage.getItem('darkmode') === 'enabled'){
    bgchange.classList.add('dark-mode')
    BandW.src = "./IMG/blac moon.png"
}

// document.addEventListener('click', (event) => {
//     if (event.target !== confrm) {
//         confrm.style.display = 'none';
//     }
// })

//Closing confirm box

close.addEventListener('click', () => {
    confrm.style.display = 'none';
})

//the subscribe box where the email will also be put in

subscribe.addEventListener('click', () => {
    if (!inpt.value == '') {
        confrm.style.display = 'none';
        loading.style.display = 'block'
        loading.innerHTML = 'Loading....'


        setTimeout(() => {
            loading.style.backgroundColor = 'gray';
            loading.style.color = 'white';
            loading.innerHTML = 'Validating Email....'
            
            },1000)
            

        setTimeout(() => {
        
        loading.style.display = "none"
        successful.style.display = 'block'
        successful.style.transition = "2s linear"
        successful.classList.add('show')
        confrm.style.display = 'none';
        inpt.value = '';
        },3000)
        
        
        
        
    }
    else if (inpt.value == '') {
        inpt.classList.add('shake')
    }

})

//the OK button in the last dialog box that was displayed

ok.addEventListener('click', () => {
    successful.style.display = 'none';e
})

//different button toggle in the page where i have register, sign up and done

button1.addEventListener('click', () => {
    nav.innerText = "1";
    togHead.innerText = "Sign Up"
    main.innerText = "Any doctor licensed by the General Medical Council with a valid GMC Number\
    can register to LocumDoc providing GMC license, \
    Right to work and Medical Degree Certificate.";
    srchange.src = "../IMG/doctors4.png"
    button1.classList.add('active')
    button2.classList.remove('active')
    button3.classList.remove('active')
    
    
})


button2.addEventListener('click', () => {
    nav.innerText = "2";
    togHead.innerText = "Sign Up"
    main.innerText = "Any doctor licensed by the General Medical Council with a valid GMC Number\
    can register to LocumDoc providing GMC license, \
    Right to work and Medical Degree Certificate.";
    srchange.src = '../IMG/sign up.png'
    button2.classList.add('active')
    button1.classList.remove('active')
    button3.classList.remove('active')  
})


button3.addEventListener('click', () => {
    nav.innerText = 3;
    togHead.innerText = "Done"
    main.innerText = "Any doctor licensed by the General Medical Council with a valid GMC Number \
    can register to LocumDoc providing GMC license, \
    Right to work and Medical Degree Certificate.";
    srchange.src = '../IMG/doctorNav3.png'
    button3.classList.add('active')
    button2.classList.remove('active')

})

// nav.addEventListener('click', () => {
//     togHead.innerText = "Reister"
//     document.createElement('p')
    
//     main.innerText = "Sign up and Start woking as a doctor";
//     srchange.src = '../IMG/doctorNav3.png'
// })