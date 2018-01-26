/**
 * HoverAccordion - jQuery plugin for intuitively opening accordions and menus
 * 
 * http://berndmatzner.de/jquery/hoveraccordion/
 * 
 * Copyright (c) 2008-2010 Bernd Matzner
 * 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * 
 * Version: 0.9.0
 * 
 * Requires jQuery 1.4.4 or higher
 */
(function($) {
    $.fn.hoverAccordion = function(options) {
        // Setup options
        options = jQuery.extend({
            // Speed at which the subitems open up - valid options are: slow,
            // normal, fast, or integer for duration in milliseconds
            speed : 'fast',
            // true: Automatically activate items with links corresponding to
            // the current page, 2: Activate item #2 (numbering starts with 1!)
            activateItem : true,
            // true: Set the height of each accordion item to the size of the
            // largest one, false: Leave height as is
            keepHeight : false,
            // true: Handle accordion on click only rather than hovering, false:
            // React to hovering
            onClickOnly : false,
            // Class name of the initially active element
            classActive : 'active',
            // Class name for header items
            classHeader : 'header',
            // Class name for hover effect
            classHover : 'hover',
            // Class name for open header items
            classOpen : 'opened',
            // Class name for closed header items
            classClosed : 'closed'
        }, options);

        // Current hover status
        var container = this;

        // Current URL
        var pageHref = window.location.href;

        // Interval for detecting intended element activation
        var i = 0;

        // Change display status of subitems when hovering
        function doHover(itemList, itemHeader, listHeight) {

            // Change only one display status at a time
            var oldList = $(container).find('.' + options.classOpen).closest(
            'li').find('ul:first');

            if (false === oldList.is(':animated')) {
                if (options.keepHeight == true) {
                    listHeight = maxHeight;
                }

                // Change display status if not already open
                if (itemHeader.hasClass(options.classOpen) == false) {
                    itemList.children().show();
                    itemList.animate({
                        height : listHeight
                    }, {
                        step : function(n, fx) {
                            itemList.height(listHeight - n);
                        },
                        duration : options.speed
                    });

                    oldList.animate({
                        height : 0
                    }, {
                        step : function(n, fx) {
                            itemList.height(listHeight - n);
                        },
                        duration : options.speed
                    }).children().hide();

                    // Switch classes for headers
                    itemHeader.addClass(options.classOpen).removeClass(
                    options.classClosed);

                    oldList.closest('li').removeClass(options.classActive)
                    .find('a:first').addClass(options.classClosed).removeClass(
                    options.classOpen);
                }
            }
        }

        var itemNo = 0;
        var maxHeight = 0;

        // Setup initial state and hover events
        $(this)
        .children('li')
        .each(
        function() {
            var item = $(this);
            var isActive = false;

            itemNo++;

            var itemHeader = item.find('a:first').addClass(options.classHeader);

            if (itemHeader.length > 0) {
                // Hover effect for all links
                itemHeader.hover(function() {
                    itemHeader.addClass(options.classHover);
                }, function() {
                    itemHeader.removeClass(options.classHover);
                });

                var itemHref = itemHeader.attr('href');

                if (itemHref == '#') {
                    // Add a click event if the header does not contain a link
                    itemHeader.click(function() {
                        this.blur();
                        return false;
                    });
                } else if (options.activateItem == true
                && pageHref.indexOf(itemHref) > 0
                && pageHref.length - pageHref.lastIndexOf(itemHref) == itemHref.length) {
                    isActive = true;
                    item.addClass(options.classActive);
                    itemHeader.removeClass(options.classClosed).addClass(
                    options.classOpen);
                }
            }

            var itemList = item.find('ul:first');

            // Initialize subitems
            if (itemList.length > 0) {
                var listHeight = itemList.height();

                if (maxHeight < listHeight)
                    maxHeight = listHeight;

                if (options.onClickOnly == true) {
                    itemHeader.click(function() {
                        doHover(itemList, itemHeader, listHeight);
                    });
                } else {
                    // Bind hover events to all headers of sublists
                    itemHeader.hover(function() {
                        i = setInterval(function() {
                            doHover(itemList, itemHeader, listHeight);
                            clearInterval(i);
                        }, 400);
                    }, function() {
                        clearInterval(i);
                    });
                }

                // Set current link to current URL to 'active'
                if (options.activateItem == true) {
                    itemList
                    .children('li')
                    .each(
                    function() {
                        var m = $(this).find('a').attr('href');
                        if (m) {
                            if (pageHref.indexOf(m) > 0
                            && pageHref.length - pageHref.lastIndexOf(m) == m.length) {
                                isActive = true;
                                item.addClass(options.classActive);
                                itemHeader.removeClass(options.classClosed)
                                .addClass(options.classOpen);
                            }
                        }
                    });
                } else if (parseInt(options.activateItem, 10) == itemNo) {
                    isActive = true;
                    item.addClass(options.classActive);
                    itemHeader.removeClass(options.classClosed).addClass(
                    options.classOpen);
                }
            }

            // Close all subitems except for those with active items
            if (!isActive) {
                itemHeader.removeClass(options.classOpen);
                if (itemList.length > 0) {
                    itemList.children().hide();
                    itemHeader.addClass(options.classClosed);
                }
            }
        });

        return this;
    };
})(jQuery);
