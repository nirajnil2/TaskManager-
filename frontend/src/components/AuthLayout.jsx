import React from "react"

const AuthLayout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-full md:w-1/2 overflow-y-auto">
        <div className="min-h-full flex flex-col px-12 pt-8 pb-12">
          <div className="flex-grow flex items-center justify-center">
            {children}
          </div>
        </div>
      </div>

      <div className="hidden md:block w-1/2">
        <img
          src="https://cdn.dribbble.com/userupload/47213960/file/5b05e702e8e8c7de3154bd01fc9f1b21.png?resize=1024x640&vertical=center"
          alt="Login background"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}

export default AuthLayout
