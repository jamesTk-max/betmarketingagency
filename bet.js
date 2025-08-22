
    // Toggle mobile menu
    document.getElementById('menu-btn').addEventListener('click', function() {
        const menu = document.getElementById('menu');
        menu.classList.toggle('active');
        
        // Animate hamburger icon
        this.classList.toggle('open');
    });

    // Language translations
    const translations = {
        en: {
            "home": "Home",
            "services": "Services",
            "about": "About Us", 
            "contact": "Contact",
            "heroTitle": "WE GROW BRANDS, BUILD AUDIENCES, AND DRIVE SALES",
            "startNow": "START NOW",
            "changeLanguage": "ቋንቋ ቀይር",
            "ourServices": "Our Services",
            "socialMedia": "Social Media Marketing",
            "socialMediaDesc": "We help businesses grow online by managing social media platforms, creating campaigns, and engaging audiences to boost brand awareness and sales.",
            "contentCreation": "Content Creation",
            "contentCreationDesc": "Crafting engaging visuals, graphics, and written content tailored to your brand to capture attention and connect with your audience.",
            "contentMarketing": "Content Marketing",
            "contentMarketingDesc": "Strategically planning and distributing content to attract, retain, and convert your target audience effectively.",
            "videoEditing": "Video Editing",
            "videoEditingDesc": "Producing professional videos, from cutting and color correction to adding effects, to communicate your brand story powerfully.",
            "webDevelopment": "Website Development",
            "webDevelopmentDesc": "Designing responsive and user-friendly websites that reflect your brand and drive online growth.",
            "logoDesign": "Logo Design",
            "logoDesignDesc": "Creating unique and memorable logos that represent your brand identity and leave a lasting impression.",
            "aboutTitle": "About Us",
            "aboutText": "BET Agency was founded by three passionate friends Eyob Temesgen, Tamirat Kidane, and Bereket Tesfaye who share a vision of helping businesses grow in the digital age. Each of us brings unique skills to the table. Eyob specializes in logo design, creativity, business strategy, website development and customer communication, ensuring that every brand we work with stands out and every client feels understood. Tamirat is skilled in website development and customer relations, making sure our clients' voices are heard and their ideas brought to life. Bereket, with his talent in video editing, shooting videos, and content posting, helps brands tell their story in engaging and impactful ways. Together, we built BET Agency on the belief that collaboration, creativity, and trust are the foundation of successful marketing. Our mission is simple: to connect businesses with their audiences through design, content, and strategy that truly make an impact.",
            "tamirat": "Tamirat Kidane",
            "tamiratDesc": "Skilled in website development, graphics designing, and business strategy and client communication. Loves building user-friendly websites and working with clients.",
            "eyob": "Eyob Temesgen", 
            "eyobDesc": "Focused on creativity, logo design, business strategy, website development and excellent client communication to make every brand stand out.",
            "bereket": "Bereket Tesfaye",
            "bereketDesc": "Expert in video editing, shooting, and content posting helping brands tell their story in engaging ways.",
            "contactTitle": "Contact Us",
            "contactSubtitle": "Let's Grow Your Brand Together",
            "contactDesc": "Our team of experts is ready to help you elevate your brand's digital presence. From strategic planning to execution, we provide comprehensive solutions tailored to your business needs.",
            "getStarted": "Get Started",
            "namePlaceholder": "Name",
            "emailPlaceholder": "Email",
            "phonePlaceholder": "Phone Number",
            "messagePlaceholder": "Share your ideas with us…",
            "submit": "Submit",
            "footerContact": "Contact Us",
            "footerLocation": "Location",
            "footerFollow": "Follow Us",
            "copyright": "© 2025 BET Marketing Agency. All rights reserved."
        },
        am: {
            "home": "ዋና ገፅ",
            "services": "አገልግሎቶች", 
            "about": "ስለ እኛ",
            "contact": "እኛን ለማግኘት",
            "heroTitle": "ስሞትን ገንብተን በማሳደግ፣ ደንበኛ እንጨምርሎታለን።",
            "startNow": "አሁኑኑ ይጀምሩ",
            "changeLanguage": "Change Language",
            "ourServices": "አገልግሎቶች",
            "socialMedia": "የማህበራዊ ሚዲያ በመጠቀም ማስተዋወቅ",
            "socialMediaDesc": "ለቢዝነሶች ማስታወቁያ ቪድዮችን በመስራት ማህበራዊ ሚዲያን በመጠቀም በማስተዋወቅ እና የቢዝነሶችን ስም በማሳደግ ሽያጭ እንጨምራለን።",
            "contentCreation": "ምስሎች እና ቪዲዮዎች መስራት",
            "contentCreationDesc": "ለእይታ ማራኪ እና ሳቢ የሆኑ ቪዲዮዎችን እና ምስሎችን በመስራት ቢዝነሶች በሰዎች ዘንድ ተወዳጅነትን እንዲያተርፉ እንጥራለን።",
            "contentMarketing": "ኮንተንት ማርኬቲንግ",
            "contentMarketingDesc": "ምርጥ የሆኑ የማህበራዊ ሚድያ ዘዴዎችን እና እቅዶችን በመጠቀም ተመልካቾችን በመሳብ ደንበኞችን እናሳድጋለን።",
            "videoEditing": "ቪዲዮ ኤዲቲንግ",
            "videoEditingDesc": "አሉ የተባሉ ሶፍትዌሮች እና አፕልኬሽኖችን በመጠቀም ጥራታቸውን የጠበቁ ቪድዮዎችን እና ምስሎችን በመስራት ቢዝነሶች ላቅ ወዳለ ደረጃ እናደርሳለን።",
            "webDevelopment": "ድህረ ገፅ መስራት",
            "webDevelopmentDesc": "ቢዝነስዎን የሚያሳዩ እና የሚያስተዋውቁ ድህረ ገፆችን/Website ውበታቸውን እና ጥራታቸውን በጠበቀ መልኩ እንገነባለን።",
            "logoDesign": "አርማ/Logo መስራት",
            "logoDesignDesc": "የቢዝነሶችን አርማ/Logo ለአይን በሚማርክ እና በማይረሳ መልኩ እንሰራለን።",
            "aboutTitle": "ስለ እኛ",
            "aboutText": "BET ማርኬቲንግ ኤጀንሲ ኢዮብ ተመስገን፣ በረከት ተስፋዬ እና ታምራት ኪዳኔ በሚባሉ ጓደኛሞች የተመሠረተ ሲሆን፣ የተመሰረተበትም አላማ ባለንበት የዲጅታል ዘመን ቢዝነሶች በማዘመን ለመርዳት ነው። እያንዳንዱ የድርጅቱ አባል የተለያየ ችሎታዎች አሉት። ታምራት ኪዳኔ በዌብሳይት ዲቨሎፕመንት/Website Development እና በደንበኛ ግንኙነት / client communication የተካነ ሲሆን ደንበኞችን ለማስደሰት የተቻለውን ሁሉ ያደርጋል። እዮብ ተመስገን በሎጎ ዲዛይን፣ ፈጠራዎች፣ በደንበኛ ግንኙነት / client communication እንዲሁም በዌብሳይት ዲቨሎፕመንት/Website Development የተካነ ሲሆን የደንበኞችን ፍላጎት ለማሙላት ይጥራል። በረከት በቪድዮ ኤዲቲንግ/Editing እና ሹቲንግ/Shooting እንዲሁም በማህበራዊ ሚዲያዎች እውቀት ያለው ሲሆን የቢዝነሶችን ስም ለማሳደግ ይጥራል። አንድላይ በመሆን እና ያለንን እውቀት በመጠቀም አላማችን ቢዝነሶችን ማሳደግ እና ወደተሻለ ቦታ ማድረስ ነው።",
            "tamirat": "ታምራት ኪዳኔ",
            "tamiratDesc": "በዌብሳይት ዲቨሎፕመንት/Website Development እና በደንበኛ ግንኙነት / client communication የተካነ ነው።",
            "eyob": "እዮብ ተመስገን",
            "eyobDesc": "በሎጎ ዲዛይን፣ ፈጠራዎች፣ በደንበኛ ግንኙነት / client communication እንዲሁም በዌብሳይት ዲቨሎፕመንት/Website Development የተካነ ነው።",
            "bereket": "በረከት ተስፋዬ",
            "bereketDesc": "በቪድዮ ኤዲቲንግ/Editing እና ሹቲንግ/Shooting እንዲሁም በማህበራዊ ሚዲያዎች እውቀት አለው።",
            "contactTitle": "እኛን ለማግኘት",
            "contactSubtitle": "ቢዝነስዎን አብረን እናሳድግ",
            "contactDesc": "ኤጀንሲያችን ያለውን እውቀት በመጠቀም ቢዝነስዎን ለማዘመን ተዘጋጅቷል።",
            "getStarted": "እዚህ ይጀምሩ።",
            "namePlaceholder": "ስም",
            "emailPlaceholder": "ኢሜይል",
            "phonePlaceholder": "ስልክ ቁጥር",
            "messagePlaceholder": "መልእክትዎን ያስቀምጡ",
            "submit": "ላክ",
            "footerContact": "እኛን ለማግኘት",
            "footerLocation": "አድራሻ",
            "footerFollow": "ይከተሉን",
            "copyright": "© 2025 BET ማርኬቲንግ ኤጀንሲ. ሁሉም መብቶች የተጠበቁ ናቸው."
        }
    };

    // Set initial language
    let currentLang = 'am';
    
    // Function to change language
    function changeLanguage(lang) {
        currentLang = lang;
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }


}
        });
        
        // Update selector value
        document.getElementById('language-selector').value = lang;
        
        // Store language preference
        localStorage.setItem('preferredLanguage', lang);
    }
    
    // Initialize language
    document.addEventListener('DOMContentLoaded', function() {
        const savedLang = localStorage.getItem('preferredLanguage') || 'en';
        changeLanguage(savedLang);
        
        // Set up language selector change event
        document.getElementById('language-selector').addEventListener('change', function(e) {
            changeLanguage(e.target.value);
        });
        
        // Set up language toggle button
        document.getElementById('lang-toggle').addEventListener('click', function() {
            const newLang = currentLang === 'en' ? 'am' : 'en';
            changeLanguage(newLang);
        });
    });
