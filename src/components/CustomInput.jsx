import React from "react";



const CustomInput = ({ label, type = "text", value, onChange, error }) => (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border rounded-md"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
  
  export default CustomInput;
  