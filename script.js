document.addEventListener('DOMContentLoaded', function() {
    // ==================== Mobile Menu Functionality ====================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileMenuContent = document.getElementById('mobileMenuContent');
    const mobileMenuClose = document.getElementById('mobileMenuClose');

    function toggleMobileMenu() {
        mobileMenuOverlay.classList.toggle('active');
        mobileMenuContent.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    }

    // Toggle menu when clicking hamburger button
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Close menu when clicking overlay
    mobileMenuOverlay.addEventListener('click', toggleMobileMenu);
    
    // Close menu when clicking close button
    mobileMenuClose.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking on a nav link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', toggleMobileMenu);
    });

    // ==================== Sticky Header ====================
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ==================== Back to Top Button ====================
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    // ==================== Smooth Scrolling for Anchor Links ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==================== Set Current Year in Footer ====================
    document.getElementById('year').textContent = new Date().getFullYear();

    // ==================== Classes Section - Tab Functionality ====================
    const classItems = document.querySelectorAll('.class-item');
    if (classItems.length > 0) {
        const classImage = document.getElementById('classImage');
        const classTitle = document.getElementById('classTitle');
        const classDescription = document.getElementById('classDescription');

        // Class data
        const classData = {
            first: {
                image: 'assets/images/training-image-01.jpg',
                title: 'First Training Class',
                description: 'Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.'
            },
            second: {
                image: 'assets/images/training-image-02.jpg',
                title: 'Second Training Class',
                description: 'Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a velit. Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
            },
            third: {
                image: 'assets/images/training-image-03.jpg',
                title: 'Third Training Class',
                description: 'Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit amet. Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate sapien, id scelerisque felis magna id felis. Proin neque metus, pellentesque pharetra semper vel, accumsan a neque.'
            },
            fourth: {
                image: 'assets/images/training-image-04.jpg',
                title: 'Fourth Training Class',
                description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.'
            }
        };

        // Handle class item clicks
        classItems.forEach(item => {
            item.addEventListener('click', function() {
                // Remove active class from all items
                classItems.forEach(i => i.classList.remove('active-class'));
                
                // Add active class to clicked item
                this.classList.add('active-class');
                
                // Get class data
                const classType = this.getAttribute('data-class');
                const data = classData[classType];
                
                // Update content
                if (classImage) classImage.src = data.image;
                if (classTitle) classTitle.textContent = data.title;
                if (classDescription) classDescription.textContent = data.description;
            });
        });
    }

    // ==================== Schedule Section - Day Filter ====================
    const scheduleDays = document.querySelectorAll('.days span');
    if (scheduleDays.length > 0) {
        const scheduleCells = document.querySelectorAll('.schedule-table td[data-day]');
        const scheduleHeaders = document.querySelectorAll('.schedule-table th[data-day]');

        // Handle day clicks
        scheduleDays.forEach(day => {
            day.addEventListener('click', function() {
                // Remove active class from all days
                scheduleDays.forEach(d => d.classList.remove('active-day'));
                
                // Add active class to clicked day
                this.classList.add('active-day');
                
                // Get day value
                const dayValue = this.getAttribute('data-day');
                
                // Hide all cells
                scheduleCells.forEach(cell => {
                    cell.classList.remove('active-cell');
                });
                
                // Hide all headers
                scheduleHeaders.forEach(header => {
                    header.classList.remove('active-cell');
                });
                
                // Show cells for selected day
                document.querySelectorAll(`.schedule-table td[data-day="${dayValue}"]`).forEach(cell => {
                    cell.classList.add('active-cell');
                });
                
                // Show header for selected day
                document.querySelector(`.schedule-table th[data-day="${dayValue}"]`).classList.add('active-cell');
            });
        });

        // Initialize Monday as active day
        document.querySelector('.days span[data-day="monday"]').click();
    }

    // ==================== Contact Form Submission ====================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show an alert
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // ==================== Mobile Signup Button ====================
    const mobileSignupBtn = document.querySelector('.mobile-signup-btn');
    if (mobileSignupBtn) {
        mobileSignupBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Close mobile menu if open
            if (mobileMenuContent.classList.contains('active')) {
                toggleMobileMenu();
            }
            // Scroll to signup section or show signup modal
            // You can implement this based on your needs
            alert('Redirecting to signup page...');
        });
    }
});