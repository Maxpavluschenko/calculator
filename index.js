function GetResult(oper)
{
    	
   const n1 = eval(form.num_01.value);   
   const n2 = eval(form.num_02.value);   
  
  switch (oper)                       
  {                                   
    case 1:   //Кнопка +
    {
      form.res.value = n1 + n2;
      break;
    }
    case 2:   //Кнопка -
    {
      form.res.value = n1 - n2;
      break;
    }
    case 3:   //Кнопка *
    {
      form.res.value = n1 * n2;
      break;
    }
    case 4:   //Кнопка /
    {
      form.res.value = n1 / n2;
      break;
    }
  }
}
