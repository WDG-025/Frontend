// const body = document.body;
// const div = document.createElement('div');

// div.textContent = 'Special Offer: Get 20% off your next purchase!';

// div.classList.add(
//   'top-5',
//   'flex',
//   'shadow',
//   'absolute',
//   'w-[200px]',
//   'h-[200px]',
//   'rounded-xl',
//   'left-[50%]',
//   'text-white',
//   '-ml-[100px]',
//   'bg-blue-500',
//   'text-center',
//   'items-center',
//   'hidden'
// );
// body.append(div);

// function showPromotion() {
//   div.classList.remove('hidden');

//   const timeoutId = setTimeout(() => {
//     // div.remove();
//     div.classList.add('hidden');
//   }, 30000);
// }

// setTimeout(showPromotion, 3000);

const messageContainer = document.getElementById('message-container');

const messageElHTML = `<div class="px-5 py-3 rounded bg-red-300">
            <span class="text-center">Special Offer: Get 20% off your next purchase!</span>
          </div>`;

setTimeout(() => {
  messageContainer.insertAdjacentHTML('beforeend', messageElHTML);

  setTimeout(() => {
    messageContainer.innerHTML = '';
  }, 4000);
}, 3000);
