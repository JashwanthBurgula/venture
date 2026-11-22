import sys
import os
from pathlib import Path

# Add project root and backend to python path
current_dir = Path(__file__).resolve().parent
root_dir = current_dir.parent
backend_dir = root_dir / "backend"

sys.path.insert(0, str(root_dir))
sys.path.insert(0, str(backend_dir))

# Ensure serverless directories are configured in /tmp
os.environ.setdefault("STORAGE_DIR", "/tmp/storage")
os.environ.setdefault("DATABASE_URL", "sqlite:////tmp/ventureblueprint.db")
os.environ.setdefault("VERCEL", "1")

try:
    from backend.main import app
except ImportError:
    from main import app
