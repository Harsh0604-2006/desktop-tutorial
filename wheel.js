document.addEventListener('DOMContentLoaded', () => {
    const wheel = document.querySelector('.wheel');
    const spinBtn = document.querySelector('.spin-btn');
    const numSections = 8; // Number of sections on the wheel
    let currentRotation = 0;
    let finalRotation=0;
    var sectionIndex=0;
    spinBtn.addEventListener('click', () => {
        // Generate a random rotation value between 360 and 720 degrees (1 to 2 full spins)
        const spinValue = Math.floor(Math.random() * 360) + 360;
        currentRotation += spinValue;
console.log("currentRotation: "+currentRotation);
        // Apply rotation with smooth transition
        wheel.style.transition = 'transform 4s ease-out';
        wheel.style.transform = `rotate(${currentRotation}deg)`;

        // Calculate the section index
        setTimeout(() => {
             finalRotation=currentRotation%360;
            if(finalRotation>=0&&finalRotation<=45){
            console.log("Section Index: "+sectionIndex+1);

            }
            else if(finalRotation>45&&finalRotation<=90){

                console.log("Section Index: "+sectionIndex+2);
            }
            else if(finalRotation>45&&finalRotation<=90){

console.log("Section Index: "+sectionIndex+3);
}
else if(finalRotation>45&&finalRotation<=90){

console.log("Section Index: "+sectionIndex+4);
}
else if(finalRotation>90&&finalRotation<=135){

console.log("Section Index: "+sectionIndex+5);
}
else if(finalRotation>180&&finalRotation<=225){

console.log("Section Index: "+sectionIndex+6);
}else if(finalRotation>225&&finalRotation<=270){

console.log("Section Index: "+sectionIndex+7);
}
else if(finalRotation>315&&finalRotation<=360){

console.log("Section Index: "+sectionIndex+8);
}
            
            // Reapply the transition for future spins
            const array = ["Right to Equality 1", "Right to Freedom 2", "Right to Protection 3", "Right to Education 4", "Right to Justice 5", "Right against Exploitation 6","Cultural and Educational Rights 7","Right to Constitutional Remedies 8" ];
            randmIndexNumber = Math.floor(Math.random() * array.length);
            alert(array[randmIndexNumber]);
            wheel.style.transition = 'transform 4s ease-out';
        }, 4000); // Timeout should match the duration of the transition
    });


    const array = ["Right to Equality 1", "Right to Freedom 2", "Right to Protection 3", "Right to Education 4", "Right to Justice 5", "Right against Exploitation 6","Cultural and Educational Rights 7","Right to Constitutional Remedies 8" ];
    randmIndexNumber = Math.random()*8;
    alert(array[randmIndexNumber]);
});