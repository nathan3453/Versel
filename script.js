
const g_btn = document.getElementById("submit_btn");
let num = 0; // Initialize the counter
let book_n;
console.log(bookID)
let asnwer_right = false;


async function getData() {
  const output = document.getElementById("verse");
  try {
      const response = await fetch('https://nathan3453.github.io/biblebooks/books.json');
      if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
      }

      // Store the entire response in book_n (it will be an object)
      book_n = await response.json();
      console.log(book_n); // Log the fetched data

      // Enable the button once data is fetched
      g_btn.disabled = false;
  } catch (error) {
      console.error(error.message);
  }
}



getData();

function submit_fnc() {
  if (!book_n) {
    // If book_n is not loaded yet, prevent function execution
    console.log("Data is still loading...");
    return;
  }
  
    const g_box = document.getElementById("guess_box").value.trim(); // Get input value
    
    
    

  if (g_box == "") {
    console.log("No guess entered");
    return;
  }  
  
  const c_book = book_n[bookID];
  console.log(c_book);

  
    
  

  if (num < 5) {
    num += 1; // Increment the counter

  const output = document.getElementById(`g_${num}`); // Get output container


  if (c_book == g_box) {
    asnwer_right = true;
    output.innerText = `${num}. ${g_box}✅`;
    g_btn.disabled = true;
  }
  else {
    console.log()
    output.innerText = `${num}. ${g_box}❌`;
  }

  }
  else {
        
    g_btn.disabled = true;
  }

}

function overlay_off() {
  
  document.getElementById("overlay").style.display = "none";
  
}
