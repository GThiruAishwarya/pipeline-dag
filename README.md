# 🧠 Pipeline DAG Builder

A visual DAG (Directed Acyclic Graph) builder that allows users to create, edit, and validate pipelines interactively using custom nodes, automatic layout, and real-time validation logic.

---

## 🔗 Live Demo

**🚀 Hosted on Vercel**  
https://pipeline-8h3fpbpez-aishwaryayadav100-gmailcoms-projects.vercel.app/

📺 **Demo Video (Screen Recording):**  
https://drive.google.com/file/d/1gTnc80C2yDZk5QqewL3Bv3qsOEV33aeI/view?usp=sharing

🖼️ **Screenshots:**

conditions satisfied:

| Rule # | Condition               | ✅ Checked                          
| ------ | ----------------------- | ---------------------------------- 
| 1️⃣    | At least 2 nodes        | ✅                                  
| 2️⃣    | No cycles               | ✅                                  
| 3️⃣    | All nodes connected     | ✅                                  
| 4️⃣    | Direction is consistent | ✅ 
| 5️⃣    | No self-loops           | ✅                                  

before autolayout
https://drive.google.com/file/d/157h2JIFsD_OH3m3uga9cyRU86EH_RB3C/view?usp=sharing
after autolayout
https://drive.google.com/file/d/1vwtRtAbvw7ZsbOFFYQ1g1OYs5_sMKv6l/view?usp=sharing
---

## ⚙️ Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/GThiruAishwarya/pipeline-dag.git
cd pipeline-dag
### 2. Install dependencies
npm install
### 3. Run locally
npm run dev
App will run at http://localhost:5173

🧩 Features
🧱 Add, move, delete custom nodes

🔗 Drag to connect nodes

✅ DAG validation with real-time feedback

🎯 Auto Layout using dagre

👁️ Live JSON Preview

♻️ Delete with Delete key

🧠 Highlights invalid DAGs

🌈 Custom nodes (can be styled & extended)

💡 Validation Rules
A pipeline is valid only if:

It has at least 2 nodes

There are no cycles (acyclic)

All nodes are connected

No node has a self-loop

Edge direction is consistent

📹 Demo Walkthrough
➕ Adding Nodes
Click "Add Node" and name it (e.g., Start, Step1, End)

🔁 Connecting Nodes
Drag from a small circle on one node to another

📐 Auto Layout
Click the Auto Layout button to rearrange nodes using dagre

📊 JSON View
Scroll down to see a real-time DAG structure

🚧 Challenges Faced
🧠 Zustand and ReactFlowProvider
React Flow's internal store required wrapping components with <ReactFlowProvider>. Initially, this was mistakenly placed inside the component using useReactFlow(), causing runtime errors like:

markdown
Copy
Edit
[React Flow]: Seems like you have not used zustand provider as an ancestor.
🔄 Auto Layout Issues
Setting up proper positioning after dagre layout and syncing with React Flow required translating x/y coordinates and manually triggering fitView().

🔍 Debugging Validation
Validating acyclic graphs involved writing a custom DFS cycle detection function and ensuring disconnected or isolated nodes were caught.
🙌 Author
Thiru Aishwarya Yadav Gotte
GitHub: @GThiruAishwarya

