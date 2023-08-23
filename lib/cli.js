// Place all the inquier stuff in this file. 


inquirer
    .prompt([{
            type: 'input',
            name: 'text',
            message: 'What three characters would you like featured on your logo?',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like your text to be?',
        },
        {
            type: 'checkbox',
            name: 'shape',
            message: 'Which shape would you like to use for your logo?',
            choices: ["Square", "Circle", "Triangle"],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like your shape to be?',
        },
    ])

    .then((answers) => {
        console.log(answers);
        const logoParameters = generateLogo(
            answers.text,
            answers.textColor,
            answers.shape,
            answers.shapeColor,
        );

        fs.writeFile('logo.svg', logoParameters, (err) =>
            err ? console.log(err) : console.log('Successfully created logo.svg')
        );
    });