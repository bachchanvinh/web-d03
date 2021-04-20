$(document).ready(() => {
    //GET
    $("#show-text-btn").click(() => {
        alert($('#text').text())
    })
    $("#show-html-btn").click(() => {
        alert($('#text').html())
    })
    $("#show-value-btn").click(() => {
        alert($('#name-input').val())
    })
    $("#show-attribute-btn").click(() => {
        alert($('#text').attr("style"))
    })
    //SET
    $("#set-text-btn").click(() => {
        $('#text').text('Vinh')
    })
    $("#set-html-btn").click(() => {
        $('#text').html('<span>Vinh in span</span>')
    })
    $("#set-value-btn").click(() => {
        $('#name-input').val('Change value...')
    })
    $("#set-attribute-btn").click(() => {
        $('#text').attr('style', 'background-color: green; padding:8px')
    })
    //ADD
    $('#add-append-btn').click(() => {
        $('#text').append('Append')
    })
    $('#add-prepend-btn').click(() => {
        $('#text').prepend('Prepend')
    })
    $('#add-after-btn').click(() => {
        $('#text').after('After')
    })
    $('#add-before-btn').click(() => {
        $('#text').before('Before')
    })

    $('#load-btn').click(() => {
        $('text').load('http://localhost:8888/users/')
    })
})