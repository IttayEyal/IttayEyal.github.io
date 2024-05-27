
class NewLabel extends HTMLElement {
    connectedCallback() {
        const endDate = new Date(this.getAttribute('data-end-date'));
        const currentDate = new Date();

        if (currentDate > endDate) {
            this.style.display = 'none';
        } else {
            this.style.backgroundColor = 'yellow';
            this.style.color = 'red';
            this.style.padding = '2px 6px';
            this.style.borderRadius = '3px';
            this.style.fontWeight = 'bold';
            this.textContent = 'New!';
        }
    }
}

// Define the new element
customElements.define('new-label', NewLabel);

///////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('#dynamic-list li');

    const today = new Date();

    listItems.forEach(item => {
        const endDateAttr = item.getAttribute('data-end-date');

        if (endDateAttr) {
            const endDate = new Date(endDateAttr);

            if (today > endDate) {
                item.style.display = 'none';
            }
        }
    });
});
