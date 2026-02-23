$(document).ready(function() {
    //Homepage top route checking

    $(".drp_form_container .button_link_wrapper").on('click', function(event) {
        var page_name = document.querySelector(".main_big_heading").textContent.trim();
        var applyingFrom = $(".tab_wrapper div.active .resident_drp div.selected div.text").text().trim();
        var goingto = $(".tab_wrapper div.active .visiting_drp div.selected div.text").text().trim();
        // Only push to dataLayer if both values are not empty
        if (applyingFrom !== "" && goingto !== "") {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'go_to_mission_website',
                'click_category': 'Visas, eVisas & Permits',
                'mission': goingto,
                'country_of_operation': applyingFrom,
                'page_name': page_name,
            });
        } else {
            console.log("Skipping dataLayer push: Missing 'applying from' or 'going to' value.");
        }
    });
    //Header link tracking
    $(".header_nav_wrapper ul.sub_nav li a, .header_nav_wrapper ul.extra_nav li a").click(function(event) {
        //event.preventDefault();
        var page_name = document.querySelector(".main_big_heading").textContent;
        //var page_name = document.getElementsByTagName("title")[0].innerHTML;
        var clickText = this.innerText;
        //alert (clickText + " Clicked");
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'navigation_click',
            'click_category': 'Header Navigation clicked',
            'click_text': clickText,
            'page_name': page_name
        });
    });
    //Footer link tracking
    $("footer ul.main_links li a, footer ul.extra_links li a").click(function(event) {
        //event.preventDefault();
        var page_name = document.querySelector(".main_big_heading").textContent;
        //var page_name = document.getElementsByTagName("title")[0].innerHTML;
        var clickText = this.innerText;
        //alert (clickText + " Clicked");
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'navigation_click',
            'click_category': 'Footer Navigation clicked',
            'click_text': clickText,
            'page_name': page_name
        });
    });
    $(".main_footer_content .button_wrapper a").on('click', function(event) {
        var page_name = document.querySelector(".main_big_heading").textContent.trim();
        var applyingFrom = $(".main_footer_content .resident_drp div.selected div.text").text().trim();
        var goingto = $(".main_footer_content .visiting_drp div.selected div.text").text().trim();

        // Check if both values are present before firing dataLayer
        if (applyingFrom !== "" && goingto !== "") {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'go_to_mission_website',
                'click_category': 'Footer Destination banner',
                'mission': goingto,
                'country_of_operation': applyingFrom,
                'page_name': page_name,
            });
        } else {
            console.log("dataLayer not pushed: Missing 'applying from' or 'going to' value.");
        }
    });

    $(".mart_half_big .owl-item .button").on('click', function(event) {
        var clickText = this.innerText;
        //alert (clickText + " Clicked");
        if (clickText == "Government Services") {
            var newclickText = "Attestation and Verification Services"
        } else if (clickText == "Tourism Services") {
            var newclickText = "Tour Selected"
        } else if (clickText == "Passport Services") {
            var newclickText = "Passport Services"
        } else if (clickText == "Visas, eVisas & Permits") {
            var newclickText = "Visas, eVisas & Permits"
        } else {
            var newclickText = "Visas, eVisas & Permits"
        }
        //alert (newclickText + " Clicked");
        var page_name = document.querySelector(".main_big_heading").textContent;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'navigation_click',
            'click_category': newclickText,
            'click_text': clickText,
            'page_name': page_name
        });
    });

    $(".drp_form_container .button_wrapper a").on('click', function(event) {
        var page_name = document.querySelector(".main_big_heading").textContent.trim();

        var applyingFrom = $(".tab_wrapper div.active .resident_drp .selected-wrapper div.selected div.text").text().trim();
        var goingto = $(".tab_wrapper div.active .visiting_drp div.selected div.text").text().trim();

        // Only proceed if both values are not empty
        if (applyingFrom !== "" && goingto !== "") {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'go_to_mission_website',
                'click_category': 'Homepage Passport Service',
                'mission': goingto,
                'country_of_operation': applyingFrom,
                'page_name': page_name,
            });
        } else {
            console.log("dataLayer not pushed: Missing 'applying from' or 'going to' value.");
        }

        /* Optional for testing
        console.log(applyingFrom + "." + goingto + "." + page_name);
        console.log(goingto);
        */
    });

    $("ul.other_service_boxes li a").on('click', function(event) {
        var clickText = document.querySelector(".button_list .button.active").textContent;
        var clickText1 = $(this).find('h6.mart_extra_small2').html();
        //alert (clickText + " Clicked" + clickText1);
        var page_name = document.querySelector(".main_big_heading").textContent;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'menu_click',
            'click_category': clickText,
            'click_text': clickText1,
            'page_name': page_name
        });
    });

    $(".content_container_banner").on('click', function(event) {
        var clickText = $(this).find('img').attr('alt');
        //alert (clickText + " Clicked");
        var page_name = document.querySelector(".main_big_heading").textContent;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'banner_click',
            'click_category': 'Crousel banner clicked',
            'click_text': clickText,
            'page_name': page_name
        });
    });

    $(".side_seperator_list ul li").on('click', function(event) {
        var clickText = $(this).find('img').attr('alt');
        //alert (clickText + " Clicked");
        var page_name = document.querySelector(".main_big_heading").textContent;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'banner_click',
            'click_category': 'Four side banner clicked',
            'click_text': clickText,
            'page_name': page_name
        });
    });

    //Header link tracking
    $(".main_nav li a").click(function(event) {
        //event.preventDefault();
        var page_name = document.querySelector(".main_big_heading").textContent;
        //var page_name = document.getElementsByTagName("title")[0].innerHTML;
        var clickText = this.innerText;
        //alert (clickText + " Clicked");
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'navigation_click',
            'click_category': 'Top Header Navigation clicked',
            'click_text': clickText,
            'page_name': page_name
        });
    });

    // Define the script content
    const scriptContent = `
  $(".asw-menu-close").on('click', function(event) {
    alert('Data Layeraaaaa');
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'cta_click',
      'click_text': 'Accessibility Menu',
      'page_name': 'Dashboard'
    });
  });
`;

    // Function to create a <script> element
    function createScriptTag() {
        const scriptTag = document.createElement('script');
        scriptTag.text = scriptContent;
        return scriptTag;
    }

    // Observe the DOM for when .asw-container is added
    const observer = new MutationObserver((mutations, obs) => {
        const container = document.querySelector('.asw-container');
        if (container) {
            // Append the script as the last child of .asw-container
            container.appendChild(createScriptTag());

            // Stop observing after injection
            obs.disconnect();
        }
    });

    // Start observing the DOM
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

});

$(document).ready(function() {
    const divTarget = $('.visa-box-menu')[0];

    // Function to attach click event handlers
    function attachClickHandlers() {
        $(".mart_half_big .other_service_boxes_for_box .vac-notice-test a").off('click').on('click', function() {
            var page_name = $(".main_big_heading").text().trim();
            var clickText = $(this).text().trim();
            var applyingFrom = $(".tab_wrapper div.active .resident_drp div.selected div.text").text().trim();
            var goingto = $(".tab_wrapper div.active .visiting_drp div.selected div.text").text().trim();

            // Only push if both values are not empty
            if (applyingFrom !== "" && goingto !== "") {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'menu_click',
                    'click_category': 'Notice banner clicked',
                    'click_text': applyingFrom + '/' + goingto + ' - ' + "Travel Medical Insurance",
                    'page_name': page_name
                });
            } else {
                console.log("dataLayer not pushed: Missing 'applying from' or 'going to' value.");
            }
        });

        $(".mart_half_big .other_service_boxes_for_box .vac-notice-banner a").off('click').on('click', function() {
            var page_name = $(".main_big_heading").text().trim();
            var clickText = $(this).text().trim();
            var applyingFrom = $(".tab_wrapper div.active .resident_drp div.selected div.text").text().trim();
            var goingto = $(".tab_wrapper div.active .visiting_drp div.selected div.text").text().trim();

            // Push to dataLayer only if both dropdowns have values
            if (applyingFrom !== "" && goingto !== "") {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'menu_click',
                    'click_category': 'Notice banner clicked',
                    'click_text': applyingFrom + '/' + goingto + ' - ' + "Visa Application Centre",
                    'page_name': page_name
                });
            } else {
                console.log("dataLayer not pushed: Missing 'applying from' or 'going to' value.");
            }
        });
    }

    // MutationObserver to detect changes in li elements
    const mutationObserver = new MutationObserver(() => {
        console.log('li elements have been added or updated');
        attachClickHandlers();
        //$('.visa-box-menu li').css('background-color', 'yellow');
    });

    // IntersectionObserver to detect when the div becomes visible
    const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Div is visible');

                // Attach click handlers and observe li changes
                attachClickHandlers();

                intersectionObserver.unobserve(divTarget);
                mutationObserver.observe($('.visa-box-menu')[0], {
                    childList: true,
                    subtree: true
                });
            }
        });
    });

    // Start observing the div element
    intersectionObserver.observe(divTarget);
});