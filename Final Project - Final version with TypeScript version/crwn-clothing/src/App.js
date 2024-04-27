import { Routes, Route } from "react-router-dom"

import Home from "./Routes/Home/Home.component"
import Navigation from "./Routes/Navigation/Navigation.component"
import Authentication from "./Routes/Authentication/Authentication.component"
import Shop from "./Routes/Shop/Shop.component"
import Checkout from "./Components/Checkout/Checkout.component"
import { useEffect } from "react"
import { checkUserSession } from "./Store/user/user.actions"
import { useDispatch } from "react-redux"
import CategoriesPreview from "./Components/Categories-Preview/CategoriesPreview.component"
import { fetchCategoriesStart } from "./Store/categories/category.actions"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
    dispatch(fetchCategoriesStart())
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route
          index
          element={
            <>
              <Home />
              <CategoriesPreview />
            </>
          }
        />
        <Route path="/*" element={<Shop />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App
