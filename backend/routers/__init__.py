from .login import router as login_router
from .me import router as me_router
from .users import router as users_router
from .emails import router as emails_router

"""
Our actual routers being exported
based on the resource they manage
but completely ready for production
"""
__all__ = ["login_router", "me_router", "users_router","emails_router"]