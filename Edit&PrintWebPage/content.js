function callDesignHTML() {
  try{
    document.designMode = 'On';
  }
  catch(err){
    alert('Error while run:' + err);
  }
}
