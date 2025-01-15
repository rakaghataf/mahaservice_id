document.addEventListener("DOMContentLoaded", () => {
    const motorList = document.getElementById("motor-list");
    const motors = [
        { name: "Honda Beat FI", price: 60, image: "https://enoanderson.com/wp-content/uploads/2014/04/beat-orange.jpg?w=768" },
        { name: "Yamaha FreeGo", price: 80, image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//96/MTA-91129344/yamaha_yamaha_full11.jpg" },
        { name: "Honda Beat Street", price: 70, image: "https://imgcdn.oto.com/large/gallery/color/73/2269/honda-beat-street-esp-color-995908.jpg" }
    ];

    motors.forEach(motor => {
        const motorDiv = document.createElement("div");
        motorDiv.innerHTML = `
            <img src="${motor.image}" alt="${motor.name}" style="width: 100%; border-radius: 5px;">
            <h3>${motor.name}</h3>
            <p>Harga: ${motor.price}K/hari</p>
            <button class="rent-now">Sewa Sekarang</button>
        `;
        motorList.appendChild(motorDiv);
    });

    document.querySelectorAll(".rent-now").forEach(button => {
        button.addEventListener("click", (event) => {
            const motorName = event.target.previousElementSibling.previousElementSibling.textContent;
            alert(`Anda memilih untuk menyewa motor: ${motorName}`);
        });
    });

    const contactForm = document.getElementById("contact-form");
    contactForm?.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for reaching out! We will contact you soon.");
        contactForm.reset();
    });
});
