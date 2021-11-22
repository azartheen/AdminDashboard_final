$(function () {
    $('.js-sweetalert button').on('click', function () {
        var type = $(this).data('type');
        if (type === 'basic') {
            showBasicMessage();
        }
       
        else if (type === 'autoclose-timer') {
            showAutoCloseTimerMessage();
        }
       
    });
}); 
function showBasicMessage() {
    swal("HHey Azar!");
}
 

function showAutoCloseTimerMessage() {
    let timerInterval
    Swal.fire({
      title: 'Thank You For Complete this survey 🤙',
      html: 'Loading Next Survey 😏 Please Wait <b></b> milliseconds.',
      imageUrl: "../../images/thumbs-up.png",
      timer: 15000,
      timerProgressBar: true,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
        window.location.reload()
        
      }
    }).then((result) => {
       
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
        window.location.href('/asdad')
      }
    })
}
 
