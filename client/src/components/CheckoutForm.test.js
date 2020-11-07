import React from "react";
import { render, fireEvent, screen, getByTestId } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import { act } from "react-dom/test-utils";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //arrange
    const formWrapper = render(<CheckoutForm />);
    //act 
    formWrapper.getByText(/checkout form/i);
    //assert
});

test("form shows success message on submit with form details", async () => {
    //arrange
    render(<CheckoutForm />);
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    const submit = screen.getByRole('button', { name: /checkout/i });
    

    //act 
    fireEvent.change(firstNameInput, { target: 
        {
            name: "firstName",
            value: "Chief"
        }
    });

    fireEvent.change(lastNameInput, { target: 
        {
            name: "lastName",
            value: "MountainFox"
        }
    })

    fireEvent.change(addressInput, { target: 
        {
            name: "address",
            value: "111 Ones Street"
        }
    })

    fireEvent.change(cityInput, { target: 
        {
            name: "city",
            value: "Town-Town"
        }
    })

    fireEvent.change(stateInput, { target: 
        {
            name: "state",
            value: "CA"
        }
    })

    fireEvent.change(zipInput, { target: 
        {
            name: "zip",
            value: "94500"
        }
    })

    fireEvent.click(submit);
    //expect(success).toHaveContent(/woo-hoo/i);

    const success = await screen.findByText(/woo-hoo/i);

    expect(firstNameInput).toHaveValue();
    expect(lastNameInput).toHaveValue();
    expect(addressInput).toHaveValue();
    expect(cityInput).toHaveValue();
    expect(stateInput).toHaveValue();
    expect(zipInput).toHaveValue();
});
