let temp = 0; 


temp = prompt(`Inserisci la temperatura attuale:`); 

if(temp >= 0 && temp < 20) {
    console.log(`non ci sono piu' le mezze stagioni (IF / ELSE IF)`);
}else if(temp >= 20 && temp < 30)
    {
    console.log(`mi dia una peroni sudata (IF / ELSE IF)`);
}else if(temp >= 30)
    {
    console.log(`lu mare, lu sole, lu ientu(IF / ELSE IF)`);
}else if(temp < 0 && temp >= -10)
    {
    console.log(`non e' tanto il freddo quanto l'umidità (IF / ELSE IF)'`);
}else if(temp < -10)
    {
    console.log(`copriti…ancora ti raffreddi (IF / ELSE IF)`);
}

parseFloat(temp);

switch (temp != "" ){
    case temp < -10:
    console.log(`copriti…ancora ti raffreddi (SWITCH)`);
    break;

    case temp < 0:
    console.log(`non e' tanto il freddo quanto l'umidità' (SWITCH)`);
    break;
    
    case temp >= 30:
    console.log(`lu mare, lu sole, lu ientu (SWITCH)`);
    break;
    
    case temp >= 20:
    console.log(`mi dia una peroni sudata (SWITCH)`);
    break;
    
    case temp >= 0:
    console.log(`non ci sono piu' le mezze stagioni (SWITCH)`);
    break;
}
