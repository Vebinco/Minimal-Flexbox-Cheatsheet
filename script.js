document.addEventListener('DOMContentLoaded', () => {
    const containerProperties = [
        { name: 'display', description: 'Initializes a flex container.', values: ['flex'], initial: 'flex' },
        { name: 'flex-direction', description: 'Defines the direction of the main axis.', values: ['row', 'row-reverse', 'column', 'column-reverse'], initial: 'row' },
        { name: 'justify-content', description: 'Aligns items along the main axis.', values: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'], initial: 'flex-start' },
        { name: 'align-items', description: 'Aligns items along the cross axis.', values: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'], initial: 'stretch' },
        { name: 'flex-wrap', description: 'Allows items to wrap onto multiple lines.', values: ['nowrap', 'wrap', 'wrap-reverse'], initial: 'nowrap' },
        { name: 'align-content', description: 'Aligns wrapped lines along the cross-axis.', values: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'], initial: 'stretch' },
        { name: 'gap', description: 'Controls the spacing between flex items.', values: ['0px', '10px', '20px'], initial: '10px', type: 'input' }
    ];

    const itemProperties = [
        { name: 'order', description: 'Specifies the order of a flex item.', values: [0, 1, 2], initial: 0, target: 1 },
        { name: 'flex-grow', description: 'Defines how much a flex item can grow.', values: [0, 1, 2], initial: 0, target: 1 },
        { name: 'flex-shrink', description: 'Defines how much a flex item can shrink.', values: [1, 0, 2], initial: 1, target: 1 },
        { name: 'flex-basis', description: 'Sets the initial main size of a flex item.', values: ['auto', '100px', '20%'], initial: 'auto', target: 1 },
        { name: 'align-self', description: 'Overrides the container\'s align-items property.', values: ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'], initial: 'auto', target: 1 }
    ];

    const containerSection = document.getElementById('container-properties');
    const itemSection = document.getElementById('item-properties');

    function createCard(prop, index) {
        const card = document.createElement('div');
        card.className = 'property-card';
        card.style.animationDelay = `${index * 50}ms`;

        const title = document.createElement('h3');
        title.textContent = prop.name;
        card.appendChild(title);

        const description = document.createElement('p');
        description.textContent = prop.description;
        card.appendChild(description);

        const demoBox = document.createElement('div');
        demoBox.className = 'demo-box';
        demoBox.style.display = 'flex'; // All demos are flex containers

        // Add default items
        for (let i = 1; i <= 3; i++) {
            const item = document.createElement('div');
            item.className = `item item-${i}`;
            item.textContent = i;
            demoBox.appendChild(item);
        }

        // Special setup for specific properties
        if (prop.name === 'align-content') {
            demoBox.style.flexWrap = 'wrap';
            demoBox.style.height = '200px'; // Set height to create extra space
            // Add more items to ensure wrapping
            for (let i = 4; i <= 7; i++) {
                const item = document.createElement('div');
                item.className = `item item-${i}`;
                item.textContent = i;
                demoBox.appendChild(item);
            }
        } else if (prop.name === 'align-items') {
            // Adjust item styles for baseline demo
            demoBox.children[0].style.paddingTop = '20px';
            demoBox.children[1].style.fontSize = '24px';
            demoBox.children[2].style.paddingBottom = '15px';
        } else if (prop.name === 'flex-shrink') {
            // Set a basis that forces shrinking
            for (const item of demoBox.children) {
                item.style.flexBasis = '150px';
            }
        } else if (prop.name === 'flex-grow') {
            // Set a small width to create empty space
            for (const item of demoBox.children) {
                item.style.width = '50px';
            }
        } else if (prop.name === 'align-self') {
            // Set a height and initial alignment to make self-alignment visible
            demoBox.style.height = '150px';
            demoBox.style.alignItems = 'flex-start';
        }

        card.appendChild(demoBox);

        const controls = document.createElement('div');
        controls.className = 'prop-controls';
        
        prop.values.forEach(val => {
            const button = document.createElement('button');
            button.textContent = val;
            button.dataset.value = val;
            if (val === prop.initial) button.classList.add('active');
            controls.appendChild(button);
        });
        card.appendChild(controls);

        const viewCodeBtn = document.createElement('button');
        viewCodeBtn.className = 'view-code-btn';
        viewCodeBtn.textContent = 'View Code';
        card.appendChild(viewCodeBtn);

        const codeSnippet = document.createElement('pre');
        codeSnippet.className = 'code-snippet';
        card.appendChild(codeSnippet);

        // Set initial state
        if (prop.target) {
            demoBox.children[prop.target - 1].style[prop.name] = prop.initial;
        } else {
            demoBox.style[prop.name] = prop.initial;
        }
        updateCodeSnippet(prop, prop.initial);

        // Event Listeners
        controls.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const value = e.target.dataset.value;
                if (prop.target) {
                    demoBox.children[prop.target - 1].style[prop.name] = value;
                } else {
                    demoBox.style[prop.name] = value;
                }
                
                Array.from(controls.children).forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                updateCodeSnippet(prop, value);
            }
        });

        viewCodeBtn.addEventListener('click', () => {
            codeSnippet.classList.toggle('visible');
            viewCodeBtn.textContent = codeSnippet.classList.contains('visible') ? 'Hide Code' : 'View Code';
        });

        function updateCodeSnippet(prop, value) {
            if (prop.target) {
                codeSnippet.textContent = `/* Target item ${prop.target} */\n.item-${prop.target} {\n  ${prop.name}: ${value};\n}`;
            } else {
                codeSnippet.textContent = `.container {\n  ${prop.name}: ${value};\n}`;
            }
        }
        
        return card;
    }

    containerProperties.forEach((prop, i) => containerSection.appendChild(createCard(prop, i)));
    itemProperties.forEach((prop, i) => itemSection.appendChild(createCard(prop, i)));

    // Tab switching
    const containerBtn = document.getElementById('container-btn');
    const itemBtn = document.getElementById('item-btn');

    containerBtn.addEventListener('click', () => {
        containerSection.classList.remove('hidden');
        itemSection.classList.add('hidden');
        containerBtn.classList.add('active');
        itemBtn.classList.remove('active');
    });

    itemBtn.addEventListener('click', () => {
        itemSection.classList.remove('hidden');
        containerSection.classList.add('hidden');
        itemBtn.classList.add('active');
        containerBtn.classList.remove('active');
    });
});
