import ModalLayout from "./ModalLayout";

 function MovieDrop({ openModal}) {
   
  return (
    <>
      {/* box with more options */}
      <div>
     <ModalLayout btn_name="Movie" openModal={openModal}>Movie options</ModalLayout>
     
    </div>
    </>
  );
}
 function TvShowDrop({ openModal}) {
   
  return (
    <>
      {/* box with more options */}
      <div>
      <ModalLayout btn_name="TV Shows" openModal={openModal}>TV show options</ModalLayout>
     
    </div>
    </>
  );
}

export {MovieDrop, TvShowDrop};