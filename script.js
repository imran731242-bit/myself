// --- 1. Premium 5-Second Red Matrix Hacking Loader Engine ---
document.addEventListener("DOMContentLoaded", () => {
  const loaderLogs = document.getElementById("loader-logs");
  const progressBar = document.getElementById("loader-progress");
  const progressPercentage = document.getElementById("loader-percentage");
  const loaderOverlay = document.getElementById("hacking-loader");
  const statusString = document.getElementById("status-string");

  // Red Matrix Falling Rain Engine
  const canvas = document.getElementById("matrix-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana =
      "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890XYZ☠⚡";
    const alphabet = katakana.split("");

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const rainDrops = [];
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    const drawMatrix = () => {
      ctx.fillStyle = "rgba(3, 1, 1, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];

        const randColor = Math.random();
        if (randColor < 0.65) ctx.fillStyle = "#e61c24";
        else if (randColor < 0.88) ctx.fillStyle = "#6e090c";
        else ctx.fillStyle = "#ffffff";

        ctx.font = fontSize + "px 'Share Tech Mono'";
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };
    setInterval(drawMatrix, 30);
  }

  const terminalSequences = [
    {
      text: ">> [OVERRIDE]: ROOT PRIVILEGES GRANTED. SPOOFING HARDWARE INTERFACES...",
      type: "white-text",
      delay: 100,
      status: "BYPASSING UID...",
    },
    {
      text: ">> [EXPLOIT]: INJECTING MEMORY HOLES INTO ANTI-CHEAT HOOK RUNTIMES...",
      type: "purple-text",
      delay: 400,
      status: "PATCHING MEMORY...",
    },
    {
      text: "=========================================================================",
      type: "purple-text",
      delay: 700,
      status: "HOOKING EXECUTABLES...",
    },
    {
      text: "    [!!] WARDRIVERS UNLOCKED : TITAN EXE ELITE SECURITIES EXPLOIT TRACER [!!]  ",
      type: "red-text",
      delay: 1000,
      status: "ROOTING SEED DATA...",
    },
    {
      text: "=========================================================================",
      type: "purple-text",
      delay: 1300,
      status: "BYPASSING KERNEL...",
    },
    {
      text: ">> [SUCCESS]: BYPASS STRUCT COMPLETED FOR MEMORY SECTOR 0x7FFF83C2",
      type: "green-text",
      delay: 1600,
      status: "SECTOR DECRYPTED.",
    },
    {
      text: ">> [NET]: INSTANTIATING PERSISTENT DISCORD BOT REALTIME ONLINE STATE...",
      type: "white-text",
      delay: 2000,
      status: "FORCING ONLINE NODE...",
    },
    {
      text: ">> [SUCCESS]: PORTFOLIO CORE ENVIRONMENT ASSETS COMPILED SUCCESSFULLY.",
      type: "green-text",
      delay: 2600,
      status: "ASSETS LOADED.",
    },
    {
      text: ">> [LAUNCH]: SYSTEM ONLINE. WELCOME TO TAITAN.",
      type: "white-text",
      delay: 3200,
      status: "REDIRECTING...",
    },
  ];

  terminalSequences.forEach((seq) => {
    setTimeout(() => {
      if (loaderLogs) {
        const line = document.createElement("div");
        line.className = `log-line ${seq.type}`;
        line.innerText = seq.text;
        loaderLogs.appendChild(line);
        loaderLogs.scrollTop = loaderLogs.scrollHeight;
      }
      if (statusString) {
        statusString.innerText = seq.status;
      }
    }, seq.delay);
  });

  let progress = 0;
  const loadingDuration = 4000;
  const intervalTime = 50;
  const totalSteps = loadingDuration / intervalTime;
  const step = 100 / totalSteps;

  const progressInterval = setInterval(() => {
    progress += step;

    if (progress >= 100) {
      progress = 100;
      clearInterval(progressInterval);

      setTimeout(() => {
        if (loaderOverlay) {
          loaderOverlay.classList.add("fade-out");
          triggerMusicStream();
        }
      }, 200);
    }

    if (progressBar) progressBar.style.width = `${progress}%`;
    if (progressPercentage)
      progressPercentage.innerText = `${Math.floor(progress)}%`;
  }, intervalTime);
});

// --- 2. Advanced Jukebox Playlist System (Masoom Sharma Tracks) ---
const playlist = [
  { name: "2 Numbari", artist: "SAHIL !!", url: "songs/2numbari.mp3" },
  { name: "Pistol", artist: "SAHIL !!", url: "songs/pistol.mp3" },
  { name: "Bhai Tera Gunda", artist: "SAHIL !!", url: "songs/gunda.mp3" },
  { name: "Kala Tikka", artist: "SAHIL !!", url: "songs/kalatikka.mp3" },
];

let currentTrackIndex = 0;
const audio = document.getElementById("bgMusic");
const clickSound = document.getElementById("clickSound");
const musicBtn = document.getElementById("musicBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const volUpBtn = document.getElementById("volUpBtn");
const volDownBtn = document.getElementById("volDownBtn");
const trackNameText = document.getElementById("trackName");
const artistNameText = document.getElementById("artistName");

if (audio) audio.volume = 0.6;

function loadTrack(index) {
  if (!audio || !trackNameText || !artistNameText) return;
  audio.src = playlist[index].url;
  trackNameText.innerText = playlist[index].name;
  artistNameText.innerText = playlist[index].artist;
  audio.load();
}

loadTrack(currentTrackIndex);

function triggerMusicStream() {
  if (audio && audio.paused) {
    audio
      .play()
      .then(() => {
        if (musicBtn) musicBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
      })
      .catch((err) => {
        console.log("Audio stream injection completed.");
      });
  }
}

// --- Dynamic Mouse Click Sound Trigger Engine ---
document.body.addEventListener(
  "click",
  () => {
    triggerMusicStream();
    if (clickSound) {
      clickSound.currentTime = 0; // Instant reset tracking point
      clickSound
        .play()
        .catch((err) =>
          console.log("Sound frame synchronization bypass active.")
        );
    }
  },
  { once: false }
);

if (musicBtn) {
  musicBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!audio) return;
    if (audio.paused) {
      audio
        .play()
        .then(() => {
          musicBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        })
        .catch((err) => console.log("Stream error bypass reset."));
    } else {
      audio.pause();
      musicBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!audio || !musicBtn) return;
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
    audio
      .play()
      .then(() => {
        musicBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
      })
      .catch(() => {});
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!audio || !musicBtn) return;
    currentTrackIndex =
      (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex);
    audio
      .play()
      .then(() => {
        musicBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
      })
      .catch(() => {});
  });
}

if (volUpBtn && audio)
  volUpBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (audio.volume < 1.0) audio.volume = Math.min(1.0, audio.volume + 0.1);
  });
if (volDownBtn && audio)
  volDownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (audio.volume > 0.0) audio.volume = Math.max(0.0, audio.volume - 0.1);
  });

// --- 3. Live Dynamic Interactive Mouse Cursor Trail (AGER MOTO !!) ---
let lastMouseX = 0;
let lastMouseY = 0;

window.addEventListener("mousemove", (e) => {
  let distance = Math.hypot(e.clientX - lastMouseX, e.clientY - lastMouseY);
  if (distance > 25) {
    const trailNode = document.createElement("span");
    trailNode.className = "cursor-trail";
    trailNode.style.left = e.clientX + "px";
    trailNode.style.top = e.clientY + "px";
    trailNode.innerText = "!!";

    document.body.appendChild(trailNode);
    setTimeout(() => {
      trailNode.remove();
    }, 650);

    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
  }
});

// --- 4. Hardcoded High Availability State (Always Active Online Mode & Fallback Engine) ---
const DISCORD_ID = "1139336441927827587";

async function fetchDiscordStatus() {
  const dot = document.getElementById("statusDot");
  if (dot) dot.className = "live-status-dot online";

  const avatarImg = document.getElementById("discordAvatar");

  try {
    const response = await fetch(
      `https://api.lanyard.rest/v1/users/${DISCORD_ID}`
    );
    const resData = await response.json();

    if (resData.success && resData.data) {
      const data = resData.data;
      const tagEl = document.getElementById("discordTag");
      if (tagEl) tagEl.innerText = `${data.discord_user.username}`;

      // Dynamic Discord Avatar Fetch logic with fallback preservation
      if (avatarImg) {
  if (data.discord_user.avatar) {
    avatarImg.src =
      `https://cdn.discordapp.com/avatars/${DISCORD_ID}/${data.discord_user.avatar}.png?size=256`;
  } else {
    avatarImg.src = "logo.png";
  }
}
#trackName,
#artistName {
  display: none;
}
      if (data.activities && data.activities.length > 0) {
        const customAct = data.activities.find((act) => act.type === 4);
        const statusP = document.getElementById("customStatus");
        if (customAct && customAct.state && statusP) {
          statusP.innerText = customAct.state;
        }
      }
    }
  } catch (error) {
    console.log("Lanyard API Offline fallback triggered.");
    // Network drop holeo static fallback automatic restore hobe
    if (
      avatarImg &&
      avatarImg.getAttribute("src") !== "IMG_20260601_134503.jpg"
    ) {
      avatarImg.src = "logo.png";
    }
  }
}

fetchDiscordStatus();
setInterval(fetchDiscordStatus, 15000);

const joinServerBtn = document.getElementById("joinServerBtn");
if (joinServerBtn) {
  joinServerBtn.addEventListener("click", () => {
    window.open("https://discord.gg/hXrKJkFK", "_blank");
  });
}