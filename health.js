document.getElementById("submit").addEventListener("click", function () {
    const condition = document.getElementById("condition").value;
  
    const suggestions = {
      cold: {
        medicine: "Paracetamol, Antihistamines",
        diet: "Warm soups, herbal tea, and citrus fruits",
        care: "Stay hydrated, rest, and avoid cold weather",
        remedies: "Reduce stress, avoid salty foods, and maintain a healthy weight",
      },
      diabetes: {
        medicine: "Metformin, Insulin therapy",
        diet: "Low-carb vegetables, whole grains, and lean proteins",
        care: "Regular exercise, monitor blood sugar levels, and avoid sugary foods",
        remedies: "Reduce stress, avoid salty foods, and maintain a healthy weight",
      },
      hypertension: {
        medicine: "ACE inhibitors, Beta blockers",
        diet: "Low-sodium foods, leafy greens, and bananas",
        care: "Reduce stress, avoid salty foods, and maintain a healthy weight",
        remedies: "Reduce stress, avoid salty foods, and maintain a healthy weight",
      },
      Headache: {
        medicine: "ACE inhibitors, Beta blockers",
        diet: "Low-sodium foods, leafy greens, and bananas",
        care: "Reduce stress, avoid salty foods, and maintain a healthy weight",
        remedies: "Reduce stress, avoid salty foods, and maintain a healthy weight",
      },
      
    };
  
    if (condition && suggestions[condition]) {
      document.getElementById("medicine-info").textContent = suggestions[condition].medicine;
      document.getElementById("diet-info").textContent = suggestions[condition].diet;
      document.getElementById("care-info").textContent = suggestions[condition].care;
      document.getElementById("remedies-info").textContent = suggestions[condition].remedies;
  
      document.getElementById("result").classList.remove("hidden");
    } else {
      alert("Please select a valid condition.");
    }
  });