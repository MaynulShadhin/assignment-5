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
    seat.addEventListener('click', function selected(e) {
        if (seatCount < 4) {
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
            seat.removeEventListener('click', selected);
        }
        else {
            alert("You can not choose more than 4 tickets");
        }
    })
}

// coupon input
function couponApply() {
    const couponInput = document.getElementById("input-coupon");
    const couponInputText = couponInput.value;
    if (seatCount >= 4) {
        const discountedDiv = document.getElementById("discounted-div");
        const applyBtn = document.getElementById("apply-btn")
        if (couponInputText === "NEW15") {
            const discountAmount = document.getElementById("total-price").innerText * (15 / 100);
            const newDiv = document.createElement("div");
            newDiv.style.display = "flex"
            newDiv.style.justifyContent ="space-between"
            newDiv.style.padding = "15px"
            const p = document.createElement("p");
            const p2 = document.createElement("p");
            p.innerText = "Discounted Price"
            p2.innerText = discountAmount;
            newDiv.appendChild(p);
            newDiv.appendChild(p2);
            discountedDiv.appendChild(newDiv);
            applyBtn.style.display = "none"
            const newGrandTotal = document.getElementById('grand-total');
            newGrandTotal.innerText = document.getElementById("total-price").innerText - discountAmount;
        }
        else if (couponInputText === "Couple 20") {
            const discountAmount = document.getElementById("total-price").innerText * (20 / 100);
            const newDiv = document.createElement("div");
            newDiv.style.display = "flex"
            newDiv.style.justifyContent ="space-between"
            newDiv.style.padding = "15px"
            const p = document.createElement("p");
            const p2 = document.createElement("p");
            p.innerText = "Discounted Price"
            p2.innerText = discountAmount;
            newDiv.appendChild(p);
            newDiv.appendChild(p2);
            discountedDiv.appendChild(newDiv);
            applyBtn.style.display = "none"
            const newGrandTotal = document.getElementById('grand-total');
            newGrandTotal.innerText = document.getElementById("total-price").innerText - discountAmount;
        }
        else {
            alert("Invalid Coupon Code")
        }
    }
    else {
        alert("You have to buy 4 tickets for using coupon")
    }
}


// modal
function getModalOpen() {
    const phoneInput = document.getElementById("phone-input");
    const phoneInputText = phoneInput.value;
    const phoneText = parseInt(phoneInputText);
    if (seatCount && !isNaN(phoneText)) {
        const modal = document.getElementById("my_modal_3");
        modal.showModal();
    }
    else {
        alert("Please select one seat at least and check your phone number")
    }

}

function continueBrowsing() {
    const modal = document.getElementById("my_modal_3");
    modal.close();
}