// Step 1: Get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

// Initialize WhatsApp button click counter from localStorage
let whatsappClickCount = parseInt(localStorage.getItem('whatsappClickCount')) || 0;
console.log(`Initial WhatsApp click count: ${whatsappClickCount}`);

// Function to attach event listeners to WhatsApp buttons
function attachWhatsAppListeners() {
    const whatsappButtons = document.querySelectorAll('.carousel .list .item .buttons button:first-child');
    whatsappButtons.forEach(button => {
        // Remove existing listeners to prevent duplicates
        button.removeEventListener('click', handleWhatsAppClick);
        button.addEventListener('click', handleWhatsAppClick);
    });
}

// Handler for WhatsApp button clicks
function handleWhatsAppClick() {
    whatsappClickCount++;
    localStorage.setItem('whatsappClickCount', whatsappClickCount);
    console.log(`WhatsApp button clicked! Total clicks: ${whatsappClickCount}`);
    // Optionally, update the UI to display the count
    // Example: document.getElementById('whatsappCount').innerText = `WhatsApp Clicks: ${whatsappClickCount}`;
}

// Attach WhatsApp listeners on page load
attachWhatsAppListeners();

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}

let runTimeOut;
let runNextAuto = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);

function showSlider(type){
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);

    // Reattach WhatsApp button listeners after slider transition
    attachWhatsAppListeners();
}

function openReviewsPopup(destination) {
    const popup = document.getElementById('reviewsPopup');
    const reviewsContent = document.getElementById('reviewsContent');
    
    const reviews = {
        'Ella': [
            { 
                author: 'hannah h', 
                text: 'What a lovely trip! We drove from Ella to Colombo together. He was a wonderful conversation, attentive driver, and stopped along the way to get us photo ops and snack and bathroom breaks. 2 weeks around the country and he was one of our favorites! Thanks',
                url: 'https://www.tripadvisor.com/Attraction_Review-g1507159-d26857913-Reviews-or10-Travel_Buddy-Kirindiwela_Western_Province.html'
            },
            { 
                author: 'Pauline D', 
                text: 'We used Nandika’s private transfer services three times throughout our Sri Lanka trip specifically for travelling longer roads and at the end airport transfer. He responded always very fast, offered fair prices, and arranged great drivers who were punctual and professional. We wished we‘ve had his number sooner. Definitely recommend driving with him/one of his drivers.',
                url: 'https://www.tripadvisor.com/Attraction_Review-g1507159-d26857913-Reviews-or10-Travel_Buddy-Kirindiwela_Western_Province.html'
            }
        ],
        'Sigiriya': [
            { 
                author: 'Piret P', 
                text: 'I used Nandika’s private transfer services throughout my entire trip in Sri Lanka — both for getting around within specific areas and for travelling between different cities. He was always very responsive, offered fair prices, and arranged great drivers who were punctual, friendly, and professional.',
                url: 'https://www.tripadvisor.com/Attraction_Review-g1507159-d26857913-Reviews-or10-Travel_Buddy-Kirindiwela_Western_Province.html'
            },
            { 
                author: 'Omar Lopez', 
                text: 'Nandika was really helpful my whole trip in Sri Lanka. He helped us to arrange transportation all around the country. He was also very responsive in WhatsApp.',
                url: 'https://www.tripadvisor.com/Attraction_Review-g1507159-d26857913-Reviews-or10-Travel_Buddy-Kirindiwela_Western_Province.html'
            }
        ],
        'Yala': [
            { 
                author: 'Fien P', 
                text: 'Very good service when you need to go somewhere in Sri Lanka. Good communication via whatsapp. Always a fair price and good and respectful drivers. Would recommend!',
                url: 'https://www.tripadvisor.com/Attraction_Review-g1507159-d26857913-Reviews-or10-Travel_Buddy-Kirindiwela_Western_Province.html'
            },
            { 
                author: 'Victor A', 
                text: 'Professional service for transportations services in Sri Lanka.We did Colombo Airport to Ahangama and the drive came on time, drove well, and same in the way back. Totally recommended.',
                url: 'https://www.tripadvisor.com/Attraction_Review-g1507159-d26857913-Reviews-or10-Travel_Buddy-Kirindiwela_Western_Province.html'
            }
        ],
        'Arugambay': [
            { 
                author: 'Kate J', 
                text: 'Nandika collected me from my Ella hotel and drove me to Weerawila airport. He was punctual and super friendly. He also waited with me to make sure all was well at the airport as there was nobody there when I arrived! Very friendly and professional service.',
                url: 'https://www.tripadvisor.com/Attraction_Review-g1507159-d26857913-Reviews-or10-Travel_Buddy-Kirindiwela_Western_Province.html'
            },
            { 
                author: 'MatJefferson_', 
                text: 'This isn’t for a tour but we did use the taxi service he provides across all of Sri Lanka.We were given his number by one of the first places we stayed at in Sri Lanka and was told you can WhatsApp him and he will sort it out.We had been using pick me which is also very cheap but less reliable and more worrying when you want to be picked up on time to get your train, or accommodation etc. so we used pick me for little trips around town and this company for our big drives.All the license plates and cars were sent to us the night before as pictures.All the taxis we went in were very friendly and helped with our bags every time. They all had air con although some were better than others in respect to how warm/cold the air con was.If you are visiting Sri Lanka then I would recommend you use these guys for all of your big taxi trips. They are very reasonably priced and every single taxi was on time or early.',
                url: 'https://www.tripadvisor.com/Attraction_Review-g1507159-d26857913-Reviews-or10-Travel_Buddy-Kirindiwela_Western_Province.html'
            }
        ],
        'Galle': [
            { 
                author: 'Michael L', 
                text: 'Landika and his drivers made our journey through Sir Lanka so much easier. We were able to make flexible requests, even at short notice, and were always quickly provided with a reasonably priced, friendly and safe driver. The drivers were always on time and we felt very comfortable. We can recommend Landika and its drivers to everyone.',
                url: 'https://www.tripadvisor.com/Attraction_Review-g1507159-d26857913-Reviews-or10-Travel_Buddy-Kirindiwela_Western_Province.html'
            },
            { 
                author: 'James M', 
                text: 'Absolutely faultless! Incredibly organised, so flexible and helpful! Made our transitions around Sri Lanka, easy and stress free and so reasonable in pricing! Regular communication ensured you knew all the details in plenty of time! All the drivers were safe and kind, the cars were all over a great standard and keep spotless! Couldn’t recommend more!',
                url: 'https://www.tripadvisor.com/Attraction_Review-g1507159-d26857913-Reviews-or10-Travel_Buddy-Kirindiwela_Western_Province.html'
            }
        ],
        'Wilpaththuwa': [
            { 
                author: 'JenU7632IB', 
                text: 'Excellent service from nandika and his drivers. On time and photos of the car and driver sent prior to pick up. Constant communication and a really friendly, welcoming and helpful response. Very pleased',
                url: 'https://www.tripadvisor.com/Attraction_Review-g1507159-d26857913-Reviews-or10-Travel_Buddy-Kirindiwela_Western_Province.html'
            },
            { 
                author: 'Patrick', 
                text: 'Highly recommended ! Very reliable and straightforward! We got it on our trip through Sri Lanka on recommendation. He took a lot of time on our drive from Ella to Arugam Bay and stopped on the way to show us crocodiles and other sights. He then taught us again and again very well to get from A to B. He also organized our safari in Yala, with which we were very satisfied. Communication is great via WhatsApp and he takes a lot of time to help us in the best possible way. Can ES recommend',
                url: 'https://www.tripadvisor.com/Attraction_Review-g1507159-d26857913-Reviews-or10-Travel_Buddy-Kirindiwela_Western_Province.html'
            }
        ]
    };

    reviewsContent.innerHTML = `<h3>Reviews for ${destination}</h3>`;
    if (reviews[destination]) {
        reviews[destination].forEach(review => {
            reviewsContent.innerHTML += `
                <p><strong>${review.author}</strong>: ${review.text}</p>
                <button class="original-content-btn" onclick="window.open('${review.url}', '_blank')">View Original Content</button>
            `;
        });
    } else {
        reviewsContent.innerHTML += `<p>No reviews available for ${destination}.</p>`;
    }
    
    popup.style.display = 'flex';
}

function closeReviewsPopup() {
    const popup = document.getElementById('reviewsPopup');
    popup.style.display = 'none';
    document.getElementById('reviewsContent').innerHTML = '';
}