from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

projects = [
    {
        "id": 1,
        "icon": "🌐",
        "name": "Portfolio",
        "desc": "Personal portfolio site with an embedded AI resume agent — machine-readable JSON for recruiting tools.",
        "stack": ["HTML", "CSS", "JavaScript"],
        "status": "live",
        "link": "https://hemanthloq.github.io",
        "difficulty": "easy",
    },
    {
        "id": 2,
        "icon": "📄",
        "name": "PYQ Buddy",
        "desc": "Upload past exam PDFs and get RAG-powered analysis, topic breakdowns, and predicted questions.",
        "stack": ["Python", "FastAPI", "ChromaDB", "LangChain"],
        "status": "soon",
        "link": None,
        "difficulty": "hard",
    },
    {
        "id": 3,
        "icon": "🧠",
        "name": "LocalMind",
        "desc": "Natural language to SQL query engine powered by Ollama — runs entirely on your machine.",
        "stack": ["Python", "Ollama", "FastAPI", "SQLite"],
        "status": "soon",
        "link": None,
        "difficulty": "mid",
    },
    {
        "id": 4,
        "icon": "🎙️",
        "name": "MeetMind",
        "desc": "Record or upload meeting audio and get transcription, summaries, and action items automatically.",
        "stack": ["Python", "Whisper", "FastAPI", "React"],
        "status": "soon",
        "link": None,
        "difficulty": "mid",
    },
    {
        "id": 5,
        "icon": "🔍",
        "name": "ResearchMind",
        "desc": "Autonomous web research agent that gathers, synthesises, and cites sources on any topic.",
        "stack": ["LangGraph", "Tavily", "OpenAI", "FastAPI"],
        "status": "soon",
        "link": None,
        "difficulty": "hard",
    },
    {
        "id": 6,
        "icon": "👗",
        "name": "StyleSense",
        "desc": "Upload your outfit and get GPT-4 Vision feedback on style, fit, and occasion suitability.",
        "stack": ["GPT-4V", "React", "FastAPI", "Python"],
        "status": "soon",
        "link": None,
        "difficulty": "mid",
    },
    {
        "id": 7,
        "icon": "🤖",
        "name": "Portfolio AI",
        "desc": "Embedded chatbot backed by RAG over my resume and projects — ask it anything about me.",
        "stack": ["RAG", "ChromaDB", "React", "FastAPI"],
        "status": "soon",
        "link": None,
        "difficulty": "hard",
    },
]

resume = {
    "name": "R Hemanth Reddy",
    "nickname": "Heddy",
    "email": "avihemanth22@gmail.com",
    "github": "https://github.com/hemanthloq",
    "linkedin": "https://www.linkedin.com/in/r-hemanth-reddy-a1bb323b6",
    "portfolio": "https://hemanthloq.github.io",
    "college": "PES University Bangalore",
    "degree": "B.Tech Computer Science (AIML)",
    "year": 2,
    "graduation": 2028,
    "available_from": "2026-12-01",
    "open_to": ["AI/ML Engineering", "Full Stack Development", "Research Assistant"],
    "skills": {
        "primary": ["Python", "C", "JavaScript", "HTML/CSS", "Node.js","React", "FastAPI"],
        "learning": [ "LangChain", "LangGraph", "RAG",
                     "ChromaDB", "Ollama", "SQLite", "Git", "Whisper", "ElevenLabs"],
        "cs_foundation": ["Data Structures", "Algorithms/DAA", "Operating Systems",
                          "Computer Networks", "Linear Algebra", "Automata Theory"]
    }
}
@app.get("/projects")
def get_projects():
    return projects

@app.get("/resume")
def get_resume():
    return resume