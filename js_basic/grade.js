const percentage = process.argv[2]

if (percentage > 100 || percentage < 0){

    console.log("Invalid grade");

}else{
    if (percentage >= 86) {

        console.log("A");

    } else if(percentage >= 72){

        console.log("B");

    }else if(percentage >= 67){

        console.log("C+");

    }else if(percentage >= 60){

        console.log("C");

    }else if(percentage >= 50){

        console.log("C-");

    }else {

        console.log("F");

        }
    }