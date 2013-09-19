MEDIA_ROOT = "img/ae/";

function Slide(category, winner, par1, par2, image, credit) {
    this.category = category;
    this.winner = winner;
    this.par1 = par1;
    this.par2 = par2;
    this.image = image;
    this.credit = credit;
}

function generateSlides(slides) {
    $('.slider').append($('<ul/>'));
    var list = $('.slider').find('ul');
    for (i = 0; i < slides.length; i++) {
        var slide = slides[i];
        list.append($('<li/>'));
        var item = list.find('li').last();
        item.append($('<h3/>', {class: 'emphasis underline bestof-info', text: slide.category}));
        item.append($('<h2/>', {class: 'bestof-info', text: slide.winner}));
        item.append($('<img/>', {class: 'bestof-photo'}).attr('src', MEDIA_ROOT+slide.image));
        item.append($('<p/>', {class: 'bestof-info', text: slide.par1}));
        item.append($('<p/>', {class: 'bestof-info', text: slide.par2}));
        item.append($('<span/>', {class: 'photo-credit', text: slide.credit}));
    }
}