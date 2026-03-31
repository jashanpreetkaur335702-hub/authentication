"use client"

import { useState } from "react"

import InputField from "@/components/common/InputField"
import CheckboxField from "@/components/common/CheckboxField"
import RadioField from "@/components/common/RadioField"
import SelectField from "@/components/common/SelectField"
import TextareaField from "@/components/common/TextareaField"
import AppButton from "@/components/common/AppButton"

export default function FormPage() {
  const [gender, setGender] = useState("")
  const [country, setCountry] = useState("")

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">

      <h1 className="text-xl font-bold">Form </h1>

      <InputField label="Name" placeholder="Enter name" />
      <InputField label="Email" type="email" />

      <CheckboxField label="Accept Terms" />

      <RadioField
        value={gender}
        onValueChange={setGender}
        options={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
        ]}
      />

      <SelectField
        placeholder="Select Country"
        onValueChange={setCountry}
        options={[
          { label: "India", value: "india" },
          { label: "USA", value: "usa" },
        ]}
      />

      <TextareaField label="Message" placeholder="Write something..." />

      <AppButton>Submit</AppButton>

    </div>
  )
}