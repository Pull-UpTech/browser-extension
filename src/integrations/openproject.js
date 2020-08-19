// Work packages list items
clockifyButton.render('table.work-package-table tbody tr td.id:not(.clockify)', {observe: true}, (elem) => {
    var link,
        container = elem,
        tagName = $('span[data-field-name="customField18"]', elem.parentNode).textContent.trim(),
        description = '[' + tagName + '] ' + $('span[data-field-name="type"]', elem.parentNode).textContent.trim() +
            ' #' + $('span[data-field-name="id"]', elem.parentNode).textContent.trim() +
            ': ' + $('span[data-field-name="subject"]', elem.parentNode).textContent.trim(),
        projectName = $('#projects-menu').title.trim();

    if (tagName === '-') {
        // alert('Tracking Type not Define!');
    } else {
        link = clockifyButton.createSmallButton(description, projectName);
        container.appendChild(link);
    }

});

// Work packages details view
clockifyButton.render('.work-packages--show-view:not(.clockify)', {observe: true}, (elem) => {
    var link,
        container = $('.attributes-group--header', elem),
        tagName = $('span[data-field-name="customField18"]', elem.parentNode).textContent.trim(),
        description = '[' + tagName + '] ' + $('.type').textContent.trim() + ' ' +
            $('div.work-packages--info-row span', elem.parentNode).textContent.trim() +
            ': ' + $('.subject').textContent.trim(),
        projectName = $('#projects-menu').title.trim();

    if (tagName === '-') {
        // alert('Tracking Type not Define!');
    } else {
        link = clockifyButton.createButton(description, projectName);
        container.insertBefore(link, container.firstChild);
    }

});

/**
 // Work packages list items
 clockifyButton.render('table.work-package-table tbody tr td.id:not(.clockify)', {observe: true}, (elem) => {
    var link,
        container = elem,
        description = $('span[data-field-name="subject"]', elem.parentNode).textContent.trim(),
        projectName = $('#projects-menu').title.trim();

    link = clockifyButton.createSmallButton(description);

    container.appendChild(link);
});

 // Work packages details view
 clockifyButton.render('.work-packages--show-view:not(.clockify)', {observe: true}, (elem) => {
    var link,
        container = $('.attributes-group--header', elem),
        description = $('.subject').textContent.trim(),
        projectName = $('#projects-menu').title.trim();

    link = clockifyButton.createButton(description);

    container.insertBefore(link, container.firstChild);
});
 */
