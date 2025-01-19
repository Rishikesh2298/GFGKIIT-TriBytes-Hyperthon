document.getElementById("submit").addEventListener("click", function () {
    const condition = document.getElementById("condition").value;
  
    const suggestions = {
      cold: {
        symptoms: "Stuffy, runny nose, Scratchy, tickly throat, Sneezing, Watering eyes, Low-grade fever, Sore throat, Mild hacking cough, Achy muscles and bones, Headache, Mild fatigue, Chills, Watery discharge from nose that thickens and turns yellow or green",
        medicine: "Paracetamol, Antihistamines",
        diet: "Warm soups, herbal tea, and citrus fruits",
        care: "Stay hydrated, rest, and avoid cold weather",
        
      },
      diabetes: {
        symptoms: "Feeling more thirsty than usual, Urinating often, Losing weight without trying, Presence of ketones in the urine,Feeling tired and weak, Feeling irritable or having other mood changes, Having blurry vision, Having slow-healing sores",
        medicine: "Metformin, Insulin therapy",
        diet: "Low-carb vegetables, whole grains, and lean proteins",
        care: "Regular exercise, monitor blood sugar levels, and avoid sugary foods",
        
      },
      hypertension: {
        symptoms: "severe headaches, chest pain, dizziness, difficulty breathing, nausea, vomiting, blurred vision or other vision, changes, anxiety",
        medicine: "ACE inhibitors, Beta blockers",
        diet: "Low-sodium foods, leafy greens, and bananas",
        care: "Reduce stress, avoid salty foods, and maintain a healthy weight",
        
      },
      Headache: {
        symptoms: "Slow onset of the headache, Head usually hurts on both sides, Pain is dull or feels like a band or vice around the head, Pain may involve the back part of the head or neck, Pain is mild to moderate, but not severe.",
        medicine: "Ibuprofen , Acetaminophen , Naproxen , Aspirin , Almotriptan , Dihydroergotamine , Amitriptyline , Analgesics , Beta blocker , Chlorpromazine , Frovatriptan , Lasmiditan , Prochlorperazine",
        diet: "Low-sodium foods, leafy greens, and bananas",
        care: "Rest in a quiet, dark room , Hot or cold compresses to your head or neck , Massage and small amounts of caffeine, Over-the-counter medications such as ibuprofen (Advil, Motrin IB, others), acetaminophen (Tylenol, others) and aspirin , prescription medications including triptans, such as sumatriptan (Imitrex) and zolmitriptan (Zomig), Preventive medications such as metoprolol (Lopressor), propranolol (Innopran, Inderal, others), amitriptyline, divalproex (Depakote), topiramate (Qudexy XR, Trokendi XR ,Topamax) or erenumab-aooe (Aimovig)",
        
      },
      Stomachache: {
        symptoms: "Feeling bloated, farting a lot, Feeling full and bloated after eating, heartburn, feeling sick, Cannot poo, Watery poo, feeling sick, vomiting",
        medicine: "Sodium bicarbonate ,  Aluminum hydroxide ,  Milk of magnesia , Simethicone , Omeprazole , Cimetidine , Domperidone ,  Sucralfate , Clarithromycin",
        diet: "Oatmeal, Ginger, Applesauce, Beans, Dairy Products",
        care: "Drinking water , Avoiding lying down , Ginger , BRAT diet , Avoiding smoking and drinking alcohol , Avoiding difficult-to-digest foods , Baking soda , Figs , Aloe , Basil , Licorice",
        
      },
      Pneumonia: {
        symptoms: "Cough (with mucus or phlegm), fever, chills, difficulty breathing, chest pain, fatigue, nausea, vomiting, diarrhea, loss of appetite, body pain, fast heartbeat, shortness of breath, confusion (especially in older adults), cyanosis (blue color around the mouth due to lack of oxygen)",
        medicine: "Fluoroquinolones. Delafloxacin (Baxdela) , Macrolides. Azithromycin (Zithromax) , Monobactams. Aztreonam (Azactam) , Doxycycline , Aminoglycosides",
        diet: "Whole grains: brown rice, oats, barley, Protein rich foods (nuts, seeds, beans, white meat, cold water fishes like salmon), Green leafy vegetables (lettuce, spinach), Citrus fruits ( orange, berries, kiwi),Probiotics (yogurt, Honey, Turmeric, ginger).",
        care: "Medication Management, Hydration, Rest, Oxygen Therapy, Monitoring",
        
      },
      Whoopingcough: {
        symptoms: "Runny nose, nasal congestion, red watery eyes, fever, paroxysms of coughing",
        medicine: "Antibiotics, supportive therapy, cough suppressants, pain relievers, hospitalization in severe cases",
        diet: "Eat small frequent meals, consume easily digestible foods, include fruits rich in vitamins A and C, avoid throat irritants, stay hydrated with water juices and herbal teas",
        care: "Take antibiotics as prescribed, keep home free from irritants, use a cool mist humidifier, eat small meals every few hours, get plenty of fluids",
        
      },
      Malaria: {
        symptoms: "High fever, chills, headache, muscle pain, fatigue",
        medicine: "Antimalarial drugs, pain relievers, antiemetics, intravenous fluids, hospitalization for severe cases",
        diet: "Eat small frequent meals, consume nutrient-rich foods, avoid fatty and greasy foods, drink plenty of water and electrolyte drinks, include protein-rich foods",
        care: "Take antimalarial medications as prescribed, use insect repellent and mosquito nets, stay hydrated, rest and avoid strenuous activities, seek medical attention if symptoms worsen",
      },
       Dengue: {
        symptoms: "High fever, severe headache, pain behind the eyes, joint and muscle pain, skin rash",
        medicine: "Acetaminophen, antiemetics, intravenous fluids, medications to increase platelet count, hospitalization for severe cases",
        diet: "Eat small frequent meals, consume nutrient-rich foods, avoid fatty and greasy foods, drink plenty of water and electrolyte drinks, include protein-rich foods",
        care: "Take prescribed medications, rest and avoid physical exertion, stay hydrated, use mosquito nets and repellents, seek medical attention if symptoms worsen",
      },

      
    };
  
    if (condition && suggestions[condition]) {
        document.getElementById("symptoms-info").textContent = suggestions[condition].symptoms;
      document.getElementById("medicine-info").textContent = suggestions[condition].medicine;
      document.getElementById("diet-info").textContent = suggestions[condition].diet;
      document.getElementById("care-info").textContent = suggestions[condition].care;
      
  
      document.getElementById("result").classList.remove("hidden");
    } else {
      alert("Please select a valid condition.");
    }
  });
