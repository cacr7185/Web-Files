
  const mondayideas =["Wake up", "Shower", "Make coffee", "Sit outside"];
  let mondaycount = 0;

  document.getElementById("monday").addEventListener("click", mondayClicked);

  function mondayClicked(){
    console.log(mondayideas[mondaycount]);
    document.getElementById("ideas").innerHTML = mondayideas[mondaycount];
    if(mondaycount>=3){
      mondaycount = 0;
    }else{
      mondaycount++;
    }
  }

  const tuesdayideas =["Workout", "Meal Prep", "Study", "Go on a drive"];
  let tuesdaycount = 0;

  document.getElementById("tuesday").addEventListener("click", tuesdayClicked);

  function tuesdayClicked(){
    console.log(tuesdayideas[tuesdaycount]);
    document.getElementById("ideas").innerHTML = tuesdayideas[tuesdaycount];
    if(tuesdaycount>=3){
      tuesdaycount = 0;
    }else{
      tuesdaycount++;
    }
  }

  const wednesdayideas =["Take a long shower", "Do laundry", "Go on a walk", "Watch movie"];
  let wedcount = 0;

  document.getElementById("wednesday").addEventListener("click", wednesdayClicked);

  function wednesdayClicked(){
    console.log(wednesdayideas[wedcount]);
    document.getElementById("ideas").innerHTML = wednesdayideas[wedcount];
    if(wedcount>=3){
      wedcount = 0;
    }else{
      wedcount++;
    }
  }

  const thursideas =["Make pancakes", "Listen to a new podcast", "Call your family", "Clean room"];
  let thurscount = 0;

  document.getElementById("thursday").addEventListener("click", thursdayClicked);

  function thursdayClicked(){
    console.log(thursideas[thurscount]);
    document.getElementById("ideas").innerHTML = thursideas[thurscount];
    if(thurscount>=3){
      thurscount = 0;
    }else{
      thurscount++;
    }
  }

  const friideas =["Make your bed", "Light a candle", "Play music", "Take yourself out to dinner"];
  let fricount = 0;

  document.getElementById("friday").addEventListener("click", fridayClicked);

  function fridayClicked(){
    console.log(friideas[fricount]);
    document.getElementById("ideas").innerHTML = friideas[fricount];
    if(fricount>=3){
      fricount = 0;
    }else{
      fricount++;
    }
  }

  const satideas =["Plan a day trip", "Buy flowers", "Catch up on school work", "Go out for cocktails"];
  let satcount = 0;

  document.getElementById("saturday").addEventListener("click", saturdayClicked);

  function saturdayClicked(){
    console.log(satideas[satcount]);
    document.getElementById("ideas").innerHTML = satideas[satcount];
    if(satcount>=3){
      satcount = 0;
    }else{
      satcount++;
    }
  }

  const sunideas =["Sleep in", "Paint your nails", "At home spa night", "Watch a movie"];
  let suncount = 0;

  document.getElementById("sunday").addEventListener("click", sundayClicked);

  function sundayClicked(){
    console.log(sunideas[suncount]);
    document.getElementById("ideas").innerHTML = sunideas[suncount];
    if(suncount>=3){
      suncount = 0;
    }else{
      suncount++;
    }
  }
