const imageContainer = document.getElementById("img-container");
const p = document.querySelector("#contact p");
const input = document.querySelector("#contact input");
const button = document.querySelector("#contact button");
const message = document.querySelector("#message");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const articleLinks = document.querySelectorAll(".dashboard-item a");
const modalContent = document.getElementById("modal-content");
const mainContent = document.querySelectorAll("body > *:not(nav):not(#modal):not(#close-btn)");

const articles = {
    "article1": {
        title : "The Arrival of Abby in Our Lives",
        subtitle : "Welcoming a Lively Furball",
        content : "During the lockdown, our family made a decision that changed our daily lives: adopting a cat. With everyone at home, it was the perfect time to welcome a new furry friend and give them all the attention they needed during their adaptation period. Abby is our first cat, and before the lockdown, our busy schedules made it difficult to consider adopting a pet. We found Abby at the SPA. Due to lockdown restrictions, we couldn't meet her before adopting. However, she was described as a cat with no behavioral issues, very calm, and easy to live with. These qualities convinced us that she would be perfect for our home. In the first few days, Abby was exactly as described: calm and affectionate. She seemed to appreciate our constant presence and was loving. However, as she gained confidence, her true personality began to emerge. She showed that she didn't really like cuddles, although she gladly accepted kisses. Abby also proved to be a little ball of energy who got easily annoyed if she didn't get what she wanted immediately. At first, Abby scratched and bit us often, but over time, these behaviors decreased. Today, she scratches and bites much less frequently. However, she has kept one habit: meowing a lot to express her desires! Despite her little quirks, Abby is truly adorable. She often makes us laugh with her mischief. I remember one time when she decided to play with a bag of pasta. She tore it open, and when we woke up, there was pasta everywhere in the house, even on my parents' bed! Although she doesn't like cuddles, Abby also doesn't like being alone. She always comes to settle in a room where someone is present, seeking our company without wanting to be overly pampered. Adopting Abby has been an enriching experience for our family. She has brought a lot of joy and life into our home, and we don't regret a single moment of having her with us.",
    },
    "article2": {
        title : "Abby's Daily Routine",
        subtitle : "A Lovable Companion with Unique Habits",
        content : "Abby's day starts bright and early at 6 AM, right when I wake up. Her morning routine is quite predictable and full of her favorite activities. It all begins with her breakfast, which consists of small pieces of hard bread that my father cuts for her the night before. She absolutely loves it! After enjoying her bread, Abby heads straight to the sink to drink water directly from the tap. She then has her regular cat food before asking to go out on the balcony to soak up some sun. This is one of her favorite spots, and she spends a good amount of time there, basking in the warmth. Once she's had her fill of sun, Abby finds a cozy spot to settle down. This could be on one of the cushions on our couch, a warm bathrobe, or any piece of clothing left lying around. She prefers warm and comfortable places, and since there's usually someone working from home, she often chooses to nap in the same room, sometimes even walking across our keyboards! I usually come home around noon, and Abby is always there to greet me, asking for more food. Even if there's nothing special for her, she'll happily munch on some kibble. After lunch, her energy levels can vary. Sometimes, she gets a burst of energy and runs around the house, jumping on furniture. Other times, she goes back to sleep. In the summer, Abby loves to spend more time on the balcony, soaking up the sun again in the afternoon. At 4 PM, it's treat time, and she knows it! Occasionally, she starts to meow as early as 3 PM, eagerly anticipating her snack. The routine repeats at 6 PM when she gets her wet food. After dinner, Abby either continues her playful antics or takes another nap. She loves to jump on the fridge to watch my mom cook and will inevitably ask for more food at the dinner table. In the evenings, Abby enjoys playtime with my brother and loves it when I chase her around. Sometimes, she'll meow behind my door, hiding and then darting away as soon as I open it, inviting me to play. She also enjoys cuddling with my mom on the couch, especially when my mom is wearing a bathrobe. At night, Abby sleeps at my father's feet, even though there's plenty of space elsewhere. It's her chosen spot, and she sleeps soundly through the night. Abby's daily routine is filled with her unique quirks and lovable habits, making her an irreplaceable part of our family.",
    },
    "article3": {
        title : "Playtime, Mischief, and Exploration",
        subtitle : "A Day Filled with Fun and Surprises",
        content : "Abby's life is filled with adventures, both indoors and outdoors. Her playful and curious nature keeps our home lively and full of surprises. One of Abby's favorite activities is exploring the balcony. She loves to soak up the sun and observe the world from her perch. During the summer, she spends hours basking in the warmth, often moving from one sunny spot to another as the day progresses. Inside the house, Abby's adventures often involve her favorite toys and hiding spots. She enjoys jumping on her cat tree and fighting with the toys she finds on the way there, like her noisy mouse or her favorite catnip toys. Her playful antics sometimes lead to mischief, like putting things on the ground when she wants attention ! Abby also loves to engage in playtime with my brother and me. She enjoys being chased around the house and will often initiate play by meowing behind my door and darting away as soon as I open it. These moments of play are filled with laughter and joy, as Abby's energy and enthusiasm are infectious. Despite her independent nature, Abby enjoys companionship. She often follows us around the house, seeking interaction even if she doesn't want to be cuddled. Her presence brings a sense of comfort and warmth to our daily routines. In the evenings, Abby's adventures continue as she watches my mom cook dinner. She loves to jump on the fridge and observe the action, always hopeful for a tasty morsel. Her curiosity and playful nature make meal preparation a fun and interactive experience. Abby's adventurous spirit and unique personality bring endless joy and entertainment to our family. Her playful antics and curious explorations make every day with her an adventure.",
    },
};

articleLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        const articleId = event.target.closest(".dashboard-item").id;
        const article = articles[articleId];

        if (article) {
            modalContent.innerHTML = `
                <h3>${article.title}</h3>
                <h4>${article.subtitle}</h4>
                <p>${article.content}</p>
            `;
            modal.style.display = "block";
            closeBtn.style.display = "block";
            mainContent.forEach(content => {
                content.style.display = "none";
            });
        }
    });
});

imageContainer.addEventListener("click", () => {
    imageContainer.classList.toggle("row-reverse");
});

button.addEventListener("click", () => {
    const name = input.value;

    if (name.trim() != "") {
        message.textContent = `Hi ${name} 🐾! So nice to meet such a charming companion!`;
        message.style.display = "block";

        p.style.display = "none";
        input.style.display = "none";
        button.style.display = "none";
    }else {
        alert("Please enter a cat name!");
    }   
});

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const name = input.value;

        if (name.trim() != "") {
            message.textContent = `Hi ${name} 🐾! So nice to meet such a charming companion!`;
            message.style.display = "block";

            p.style.display = "none";
            input.style.display = "none";
            button.style.display = "none";
        }else {
            alert("Please enter a cat name!");
        }   
    }
});

document.addEventListener("click", (event) => {
    if (event.target.id === "close-btn") {
        modal.scrollTop = 0;
        modal.style.display = "none";
        closeBtn.style.display = "none";
        mainContent.forEach(content => {
            content.style.removeProperty("display");
        });
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modal.scrollTop = 0;
        modal.style.display = "none";
        closeBtn.style.display = "none";
        mainContent.forEach(content => {
            content.style.removeProperty("display");
        });
    }
});