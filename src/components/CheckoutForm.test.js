import React from "react";
import { render, screen, waitFor } from "@testing-library/react"; //Imported screen.
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //Arrange
    render(<CheckoutForm/>) //Render the CheckoutForm.
    //Act
    const header = screen.getByText(/checkout form/i) //Select the 'header' (the h2 here)
    //Assert
    expect(header).toBeInTheDocument()//Test that the header exists in the document.
    expect(header).toBeTruthy() //Test that the header is truthy.
});

test("form shows success message on submit with form details", async () => {
    //Arrange
    render(<CheckoutForm/>) //Render the CheckoutForm.

    //Act
    //Select each input and do type something in it.
    const firstNameInput = screen.getByLabelText(/first name:/i)
    userEvent.type(firstNameInput, 'Cara')
    const lastNameInput = screen.getByLabelText(/last name:/i)
    userEvent.type(lastNameInput, 'Locke')
    const addressInput = screen.getByLabelText(/address:/i)
    userEvent.type(addressInput, '1234 Main Street')
    const cityInput = screen.getByLabelText(/city:/i)
    userEvent.type(cityInput, 'Nowhereville')
    const stateInput = screen.getByLabelText(/state:/i)
    userEvent.type(stateInput, 'Nowhere')
    const zipInput = screen.getByLabelText(/zip:/i)
    userEvent.type(zipInput, '54321')
    //Select the checkout button and click it.
    const checkoutBtn = screen.getByRole('button')
    userEvent.click(checkoutBtn)
    //Wait until after the checkout button has been clicked then select the success message and the other elements of the success message.
    const successMessage = screen.getByTestId(/successmessage/i)
    const successName = screen.queryByText(/cara locke/i)
    const successAddress = screen.queryByText(/1234 main street/i)
    const successCityState = screen.queryByText(/nowhereville, nowhere 54321/i)

    //Assert
    //Make the success message and everything in it shows as it should.
    expect(successMessage).toBeInTheDocument()
    expect(successName).toBeInTheDocument()
    expect(successAddress).toBeInTheDocument()
    expect(successCityState).toBeInTheDocument()
});
