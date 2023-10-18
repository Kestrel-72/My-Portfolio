const copyContent = async(text) => {
   try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
}


function displayCopiedNotification() {
   let notification = document.querySelector('.copied-notification');
   if (notification.classList.contains('copied-notification_popped')) {
      return;
   }
   notification.classList.add('copied-notification_popped');
   setTimeout(() => {
      notification.classList.remove('copied-notification_popped');
   }, 1500);
}

window.onload = () => {
   let wrapper = document.querySelector('.loader-wrapper');
   let loader = document.querySelector('.loader');
   wrapper.classList.add('loaded');
   loader.classList.add('loaded');
}

