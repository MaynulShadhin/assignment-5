function seatBooking() {
    const seatBooking = document.getElementById('seat-booking');
    seatBooking.scrollIntoView({ behavior: 'smooth' });
}

const busSeats = document.querySelectorAll('.seat-button');
const seatBookCount = document.getElementById('seat-select');
const seatLeftCount = document.getElementById('seat-left');
let seatCount = 0;
let leftCount = 40;
for (const seat of busSeats) {
    seat.addEventListener('click', function (e) {
        seat.style.backgroundColor = "#1DD100";
        seat.style.color = "white"
        const seatText = e.target.innerText;
        seatCount = seatCount + 1;
        seatBookCount.innerText = seatCount;
        leftCount = leftCount - 1;
        seatLeftCount.innerText = leftCount;
        const selectedContainer = document.getElementById('select-container');

        const priceAndSeat = document.createElement("tr");
        const p = document.createElement("td");
        p.innerText = seatText;
        const p2 = document.createElement("td");
        p2.innerText = "Economy";
        const p3 = document.createElement("td");
        p3.innerText = 550;
        const price = p3.innerText;
        priceAndSeat.appendChild(p);
        priceAndSeat.appendChild(p2);
        priceAndSeat.appendChild(p3);
        selectedContainer.appendChild(priceAndSeat);

        const totalPrice = document.getElementById("total-price").innerText;
        const convertedTotalPrice = parseInt(totalPrice);
        document.getElementById("total-price").innerText = convertedTotalPrice + parseInt(price);
        const grandTotal = document.getElementById("grand-total").innerText;
        const convertedGrandTotal = parseInt(grandTotal);
        document.getElementById("grand-total").innerText = convertedGrandTotal + parseInt(price);
    })
}

function getModalOpen() {
    const modal = document.getElementById("my_modal_3");
    modal.showModal();
}

function continueBrowsing() {
    const modal = document.getElementById("my_modal_3");
    modal.close();
}