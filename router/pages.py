from fastapi import APIRouter, Request
from fastapi.templating import Jinja2Templates


router = APIRouter(
    prefix="",
    tags=["Pages"]
)

templates = Jinja2Templates(directory="template")

@router.get("/")
def get_main_page(request : Request):

    response = {
        "request" : request
    }
    return templates.TemplateResponse("index.html", response)