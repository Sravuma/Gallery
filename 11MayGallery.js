function gallery()
{
    var allImg=document.images
     for (i=0;i<=allImg.length-1;i++)
     {
         allImg[i].src=`${i}.jpg`
     }
}