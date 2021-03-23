function countDown(count) {
    for (let i = count; i >= 0; i--) {
        setTimeout(() => {
            console.log(i)
        }, (count - i) * 1000)
    }
}
countDown(6)