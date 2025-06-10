const resultsSection = document.querySelector("#event-results");
const typeSelect = document.querySelector("#type-select");
const distanceSelect = document.querySelector("#distance-select");
const categorySelect = document.querySelector("#category-select");
const daySelect = document.querySelector("#day-select");


document.addEventListener("DOMContentLoaded", function () {
  const joinBtn = document.getElementById("join-meetup-btn");
  if (joinBtn) {
    joinBtn.addEventListener("click", function () {
      window.location.href = "events.html";
    });
  }
});

const eventsStore = [
  {
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    description: "Being an INFJ",
    date: new Date(2024, 2, 23, 15),
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w ",
    type: "offline",
    attendees: 99,
    category: "Hobbies and Passions",
    distance: 50,
  },
  {
    title:
      "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
    description: "New York AI Users",
    date: new Date(2024, 2, 23, 11, 30),
    image:
      "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    type: "offline",
    attendees: 43,
    category: "Technology",
    distance: 25,
  },
  {
    title: "Book 40+ Appointments Per Month Using AI and Automation",
    description: "New Jersey Business Network",
    date: new Date(2024, 2, 16, 14),
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    category: "Technology",
    distance: 10,
  },
  {
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2024, 2, 13, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 77,
    category: "Business",
    distance: 100,
  },
  {
    title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 140,
    category: "Social Activities",
    distance: 74,
  },
  {
    title: "All Nations - Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "offline",
    category: "Health and Wellbeing",
    distance: 15,
  },
];


function renderEvents(events) {
      resultsSection.innerHTML = '';
      if (events.length === 0) {
        resultsSection.innerHTML = "<p>No events found.</p>";
        return;
      }

      events.forEach(event => {
        const div = document.createElement("div");
        div.className = "event-item";

        const options = {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
          timeZone: 'UTC',
        };
        const formattedDate = event.date.toLocaleString('en-US', options).toUpperCase().replace(',', '');

        div.innerHTML = `
          <div class="event-card">
            <img src="${event.image}" alt="${event.title}" class="event-img" />
            <div class="event-details">
              <p class="event-date">${formattedDate} UTC</p>
              <h3 class="event-title">${event.title}</h3>
              <p class="event-meta">${event.category} (${event.distance} km)</p>
              ${event.attendees ? `<p class="event-attendees">${event.attendees} attendees</p>` : ''}
            </div>
          </div>
        `;
        resultsSection.appendChild(div);
      });
    }

    function filterEvents() {
      const selectedType = typeSelect.value;
      const selectedDistance = distanceSelect.value;
      const selectedCategory = categorySelect.value;
      const selectedDay = daySelect.value;

      const filtered = eventsStore.filter(event => {
        const matchType = selectedType === 'any' || event.type === selectedType;
        const matchDistance = selectedDistance === 'any' || event.distance <= parseInt(selectedDistance);
        const matchCategory = selectedCategory === 'any' || event.category === selectedCategory;
        const matchDay = selectedDay === 'any' || event.date.toISOString().slice(0, 10) === selectedDay;
        return matchType && matchDistance && matchCategory && matchDay;
      });

      renderEvents(filtered);
    }

    typeSelect.addEventListener("change", filterEvents);
    distanceSelect.addEventListener("change", filterEvents);
    categorySelect.addEventListener("change", filterEvents);
    daySelect.addEventListener("change", filterEvents);

    renderEvents(eventsStore);